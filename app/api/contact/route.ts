
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, email, telefone, instituicao, mensagem } = body;

        // Configuração do "carteiro" (transporter) usando variáveis de ambiente
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true, // true para porta 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const cleanPhone = telefone.replace(/\D/g, '');
        const whatsappLink = `https://wa.me/55${cleanPhone}`;

        // Email para Admin (Empresa)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'contato@compraseg.com.br',
            replyTo: email,
            subject: 'COMPRASEG 2026 - Você tem uma nova mensagem!',
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
                    <div style="background-color: #002855; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nova Mensagem Recebida</h2>
                    </div>
                    
                    <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Remetente</strong>
                            <p style="margin: 4px 0 0; font-size: 16px;">${nome}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">${email}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">
                                ${telefone} 
                                <a href="${whatsappLink}" style="display: inline-block; margin-left: 8px; color: #25D366; text-decoration: none; font-weight: bold; background: #f0fff4; padding: 2px 8px; border-radius: 4px; border: 1px solid #c6f6d5;">
                                    WhatsApp ↗
                                </a>
                            </p>
                             <p style="margin: 4px 0 0; color: #4a5568;">Instituição: <strong>${instituicao}</strong></p>
                        </div>

                        <div style="margin-bottom: 20px; background-color: #f7fafc; padding: 15px; border-radius: 6px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Mensagem</strong>
                            <p style="white-space: pre-wrap; margin: 0; color: #2d3748;">${mensagem}</p>
                        </div>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Mensagem enviada com sucesso!' }, { status: 200 });

    } catch (error) {
        console.error('Contact Email Error:', error);
        return NextResponse.json(
            { error: 'Erro ao enviar mensagem.' },
            { status: 500 }
        );
    }
}
