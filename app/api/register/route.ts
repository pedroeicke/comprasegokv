import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const nome = formData.get('nome') as string;
        const email = formData.get('email') as string;
        const telefone = formData.get('telefone') as string;
        const orgao = formData.get('orgao') as string;
        const estado = formData.get('estado') as string;
        const municipio = formData.get('municipio') as string;
        const quantidade = formData.get('quantidade') as string;
        const nomeInscritos = formData.get('nomeInscritos') as string;
        const cnpj = formData.get('cnpj') as string;
        const endereco = formData.get('endereco') as string;
        const pagamento = formData.get('pagamento') as string;
        const empenho = formData.get('empenho') as File | null;

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

        // Prepare attachment if empenho exists
        const attachments = [];
        if (empenho && empenho.size > 0) {
            const buffer = Buffer.from(await empenho.arrayBuffer());
            attachments.push({
                filename: empenho.name,
                content: buffer
            });
        }

        // 1. Email para Admin (Empresa)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'pedroeicke@gmail.com', // Email solicitado
            subject: 'Nova Inscrição - Site VG',
            attachments: attachments,
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
                    <div style="background-color: #002855; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nova Inscrição Recebida</h2>
                    </div>
                    
                    <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Responsável</strong>
                            <p style="margin: 4px 0 0; font-size: 16px;">${nome}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">${email}</p>
                            <p style="margin: 2px 0 0; color: #4a5568;">
                                ${telefone} 
                                <a href="${whatsappLink}" style="display: inline-block; margin-left: 8px; color: #25D366; text-decoration: none; font-weight: bold; background: #f0fff4; padding: 2px 8px; border-radius: 4px; border: 1px solid #c6f6d5;">
                                    WhatsApp ↗
                                </a>
                            </p>
                        </div>

                        <div style="margin-bottom: 20px; background-color: #f7fafc; padding: 15px; border-radius: 6px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase; margin-bottom: 10px;">Dados do Órgão</strong>
                            <div style="display: grid; grid-template-columns: 1fr; gap: 10px;">
                                <div><span style="color: #718096;">Órgão:</span> <strong>${orgao}</strong></div>
                                <div><span style="color: #718096;">CNPJ:</span> <strong>${cnpj}</strong></div>
                                <div><span style="color: #718096;">Local:</span> <strong>${municipio} - ${estado}</strong></div>
                                <div><span style="color: #718096;">Endereço:</span> <strong>${endereco}</strong></div>
                            </div>
                        </div>

                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Detalhes da Inscrição</strong>
                            <p style="margin: 4px 0;">Quantidade: <strong>${quantidade}</strong></p>
                            <p style="margin: 4px 0;">Pagamento: <strong style="text-transform: capitalize;">${pagamento}</strong></p>
                        </div>
                        
                        <div style="margin-bottom: 20px;">
                            <strong style="display: block; color: #718096; font-size: 12px; text-transform: uppercase;">Inscritos</strong>
                            <div style="background-color: #f7fafc; padding: 12px; border-radius: 6px; margin-top: 4px; color: #4a5568; white-space: pre-wrap;">
                                ${nomeInscritos}
                            </div>
                        </div>
                        
                        ${attachments.length > 0 ? `
                        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                            <p style="color: #4a5568; font-style: italic;">📎 Arquivo de Empenho anexado.</p>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `,
        };

        // 2. Email para o Cliente (Confirmação)
        const clientMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Inscrição Recebida - VG Capacitação',
            html: `
                <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
                    <div style="background-color: #002855; padding: 20px; border-radius: 8px 8px 0 0;">
                        <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Inscrição Recebida!</h2>
                    </div>
                    <div style="border: 1px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <p>Olá <strong>${nome}</strong>,</p>
                        <p>Recebemos sua solicitação de inscrição com sucesso.</p>
                        <p>Nossa equipe irá analisar os dados e entrará em contato em breve para confirmar os detalhes.</p>
                        <br>
                        <p>Atenciosamente,</p>
                        <p><strong>Equipe VG Capacitação</strong></p>
                    </div>
                </div>
            `
        };

        // Envia ambos os emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return NextResponse.json({ message: 'Inscrição enviada com sucesso!' }, { status: 200 });

    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Erro desconhecido ao enviar.' },
            { status: 500 }
        );
    }
}
