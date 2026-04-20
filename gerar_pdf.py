from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from PIL import Image, ImageDraw
import os
import io

BASE = r"D:\Pastel\comprasegokv-master\comprasegokv-master\public"
OUTPUT = r"D:\Pastel\comprasegokv-master\comprasegokv-master\programacao-compraseg.pdf"

# Colors
DARK_BG = HexColor("#0A1628")
BLUE_ACCENT = HexColor("#00C1FF")
DARK_BLUE = HexColor("#0066CC")
WHITE_BG = HexColor("#FFFFFF")
GRAY_TEXT = HexColor("#666666")
LIGHT_GRAY = HexColor("#999999")

SCHEDULE = [
    {
        "day": "12 DE MAIO DE 2026 (TERÇA-FEIRA)",
        "periods": [
            {
                "name": "MANHÃ",
                "events": [
                    {"time": "8h", "title": "Credenciamento"},
                    {"time": "8h30", "title": "Abertura"},
                    {"time": "9h", "title": "Palestra inaugural – Segurança Pública em Santa Catarina", "speaker": "Flávio Rogério Pereira Graff", "role": "Secretário de Estado da Segurança Pública de Santa Catarina", "image": "profok/flaviograff.png"},
                    {"time": "9h30", "title": "Coffee break"},
                    {"time": "10h", "title": "Realidade operacional e novos desafios para a segurança pública", "speaker": "Victor dos Santos", "role": "Secretário de Segurança Pública do Estado do Rio de Janeiro", "image": "profok/vitor2.png"},
                    {"time": "10h30", "title": "A visão do Tribunal de Contas sobre as especificidades das contratações da Segurança Pública", "speaker": "Adircélio Júnior", "role": "Conselheiro do Tribunal de Contas do Estado de Santa Catarina", "image": "profok/Adircelio.png"},
                    {"time": "11h", "title": "Tema a definir", "speaker": "A definir"},
                    {"time": "11h30", "title": "Debates"},
                    {"time": "12h", "title": "Intervalo para o almoço"},
                ]
            },
            {
                "name": "TARDE",
                "events": [
                    {"time": "14h", "title": "Panorama da aviação de segurança pública", "speaker": "Alex Mena Barreto", "role": "Coronel de Polícia Militar", "image": "profok/alexok.png"},
                    {"time": "14h35", "title": "Projetos de equipamentos de defesa e segurança pública: dilemas entre desenvolvimento e aquisição", "speaker": "Claudio Cardoso", "role": "Coronel Aviador R1 da Força Aérea Brasileira", "image": "profok/claudio.jpeg"},
                    {"time": "15h10", "title": "Debates"},
                    {"time": "15h50", "title": "Coffee break"},
                    {"time": "16h20", "title": "Soluções de TI para a segurança pública. Contratar ou desenvolver? Como fiscalizar?", "speaker": "Joselaine Branchini", "role": "Coordenadora de Dívidas e Cálculos da AGU", "image": "profok/Joselaine.png"},
                    {"time": "16h55", "title": "Pressupostos necessários para a centralização de compras da segurança pública", "speaker": "Lara Brainer", "role": "Coordenadora Geral de Governança Estratégica da AGU", "image": "profok/lara.png"},
                    {"time": "17h30", "title": "Debates"},
                    {"time": "18h", "title": "Encerramento"},
                ]
            }
        ]
    },
    {
        "day": "13 DE MAIO DE 2026 (QUARTA-FEIRA)",
        "periods": [
            {
                "name": "MANHÃ",
                "events": [
                    {"time": "8h", "title": "Licitações internacionais de equipamentos de segurança pública", "speaker": "Jonas Lima", "role": "Advogado", "image": "profok/jomas.jpeg"},
                    {"time": "8h35", "title": "Estratégias em licitações internacionais: O disruptivo processo de aquisição de fuzis da Polícia Federal", "speaker": "Lucian Fidelis", "role": "Perito Criminal Federal", "image": "profok/lucian.jpeg"},
                    {"time": "9h10", "title": "Debates"},
                    {"time": "9h50", "title": "Coffee break"},
                    {"time": "10h20", "title": "Normas técnicas de fardamento: qualidade, segurança e efetividade", "speaker": "Renata Monteiro", "role": "Coordenadora de Projetos de Defesa e Segurança do SENAI CETIQT", "image": "profok/renata.jpg"},
                    {"time": "10h55", "title": "Inovações na aquisição de armamentos e equipamentos de proteção de uso policial", "speaker": "Gisele Novo", "role": "Policial Rodoviária Federal", "image": "profok/gisele.jpeg"},
                    {"time": "11h30", "title": "Debates"},
                    {"time": "12h", "title": "Intervalo para o almoço"},
                ]
            },
            {
                "name": "TARDE",
                "events": [
                    {"time": "14h", "title": "Obtenções por aquisições complexas de produtos de defesa e segurança", "speaker": "Felipe Dalenogare", "role": "Chefe de Divisão da Coordenação-Geral Jurídica de Licitações do Ministério da Defesa", "image": "profok/felipe.jpeg"},
                    {"time": "14h35", "title": "Aquisições de produtos controlados pelo Exército", "speaker": "Roberto Menezes", "role": "Coronel R1 do Exército Brasileiro", "image": "profok/roberto.png"},
                    {"time": "15h10", "title": "Debates"},
                    {"time": "15h50", "title": "Coffee break"},
                    {"time": "16h20", "title": "Requisitos de qualidade e aspectos de mercado nas compras de materiais bélicos", "speaker": "Murilo Frigeri", "role": "Graduado em Ciências Policiais", "image": "profok/murilo.jpeg"},
                    {"time": "16h55", "title": "Estudos para aquisições de veículos blindados de uso policial", "speaker": "Mario Sergio", "role": "Delegado de Polícia Civil", "image": "profok/mario.png"},
                    {"time": "17h30", "title": "Debates"},
                    {"time": "18h", "title": "Encerramento"},
                ]
            }
        ]
    },
    {
        "day": "14 DE MAIO DE 2026 (QUINTA-FEIRA)",
        "periods": [
            {
                "name": "MANHÃ",
                "events": [
                    {"time": "8h", "title": "Prestação de contas de transferência fundo a fundo", "speaker": "Michelle Silveira", "role": "Coordenadora-Geral de Transferências Fundo a Fundo da SENASP", "image": "profok/michelle.jpeg"},
                    {"time": "8h35", "title": "Responsabilização perante os tribunais de contas", "speaker": "Ana Luiza Jacoby", "role": "Advogada", "image": "profok/analuiza.png"},
                    {"time": "9h10", "title": "Debates"},
                    {"time": "9h50", "title": "Coffee break"},
                    {"time": "10h20", "title": "Aquisição de cães policiais", "speaker": "Vitor Valle", "role": "Coronel de Polícia Militar", "image": "profok/vitor.jpeg"},
                    {"time": "10h55", "title": "Estudos para aquisição de equinos para a polícia montada", "speaker": "Syllas Jadach", "role": "Tenente-Coronel de Polícia Militar", "image": "profok/SYLLAS.png"},
                    {"time": "11h30", "title": "Debates"},
                    {"time": "12h", "title": "Intervalo para o almoço"},
                ]
            },
            {
                "name": "TARDE",
                "events": [
                    {"time": "14h", "title": "Ciclo de vida de materiais bélicos", "speaker": "Juliana Ferreira", "role": "Coronel Intendente da Força Aérea Brasileira", "image": "profok/juliana.png"},
                    {"time": "14h35", "title": "Termo de Licitação Especial para as aquisições da Segurança Pública", "speaker": "Álvaro Capagio", "role": "Regulador Federal", "image": "profok/alvaro.jpeg", "co_speaker": {"name": "Murilo Frigeri", "role": "Graduado em Ciências Policiais", "image": "profok/murilo.jpeg"}},
                    {"time": "15h10", "title": "Debates"},
                    {"time": "15h50", "title": "Coffee break"},
                    {"time": "16h20", "title": "Certificações de materiais bélicos", "speaker": "Álvaro Capagio", "role": "Regulador Federal", "image": "profok/alvaro.jpeg"},
                    {"time": "16h55", "title": "Exigência de marcas e proibição de marcas em licitações da Segurança Pública", "speaker": "Noel Baratieri", "role": "Advogado", "image": "profok/noel.jpeg"},
                    {"time": "17h30", "title": "Debates"},
                    {"time": "18h", "title": "Encerramento"},
                    {"time": "18h15", "title": "Coquetel de confraternização"},
                ]
            }
        ]
    }
]

def make_circular_image(image_path, size=300):
    """Create a circular cropped image."""
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        # Crop to square from top (to get the face)
        w, h = img.size
        side = min(w, h)
        left = (w - side) // 2
        top = 0  # Crop from top to get face
        img = img.crop((left, top, left + side, top + side))
        img = img.resize((size, size), Image.LANCZOS)

        # Create circular mask
        mask = Image.new("L", (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size - 1, size - 1), fill=255)

        # Apply mask
        output = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        output.paste(img, (0, 0), mask)

        buf = io.BytesIO()
        output.save(buf, format="PNG")
        buf.seek(0)
        return ImageReader(buf)
    except Exception as e:
        print(f"Error loading image {image_path}: {e}")
        return None


def draw_text_wrapped(c, text, x, y, max_width, font_name, font_size, color, leading=None):
    """Draw text with word wrapping. Returns the y position after drawing."""
    if leading is None:
        leading = font_size * 1.3
    c.setFont(font_name, font_size)
    c.setFillColor(color)

    words = text.split()
    lines = []
    current_line = ""

    for word in words:
        test_line = f"{current_line} {word}".strip()
        if c.stringWidth(test_line, font_name, font_size) <= max_width:
            current_line = test_line
        else:
            if current_line:
                lines.append(current_line)
            current_line = word
    if current_line:
        lines.append(current_line)

    for line in lines:
        c.drawString(x, y, line)
        y -= leading

    return y


def generate_pdf():
    width, height = A4
    c = canvas.Canvas(OUTPUT, pagesize=A4)

    margin_left = 25 * mm
    margin_right = 25 * mm
    content_width = width - margin_left - margin_right

    def draw_header(c):
        """Draw page header."""
        # Dark header bar
        c.setFillColor(DARK_BG)
        c.rect(0, height - 35 * mm, width, 35 * mm, fill=True, stroke=False)

        # Title
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 20)
        c.drawCentredString(width / 2, height - 18 * mm, "COMPRASEG 2026")

        c.setFillColor(BLUE_ACCENT)
        c.setFont("Helvetica", 9)
        c.drawCentredString(width / 2, height - 25 * mm, "CONGRESSO NACIONAL DE COMPRAS DA SEGURANÇA PÚBLICA")

        c.setFillColor(HexColor("#AAAAAA"))
        c.setFont("Helvetica", 8)
        c.drawCentredString(width / 2, height - 31 * mm, "12 a 14 de Maio de 2026  •  Florianópolis - SC")

    def new_page(c):
        c.showPage()
        draw_header(c)
        return height - 45 * mm

    def check_space(c, y, needed):
        if y - needed < 25 * mm:
            return new_page(c)
        return y

    # First page
    draw_header(c)
    y = height - 45 * mm

    for day_data in SCHEDULE:
        # Day header
        y = check_space(c, y, 20 * mm)

        # Day banner
        c.setFillColor(DARK_BLUE)
        c.roundRect(margin_left, y - 10 * mm, content_width, 12 * mm, 3, fill=True, stroke=False)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 11)
        c.drawCentredString(width / 2, y - 6 * mm, day_data["day"])
        y -= 18 * mm

        for period in day_data["periods"]:
            # Period label
            y = check_space(c, y, 12 * mm)

            # Draw period line
            line_y = y - 2 * mm
            c.setStrokeColor(BLUE_ACCENT)
            c.setLineWidth(0.5)
            c.line(margin_left, line_y, margin_left + 30 * mm, line_y)

            c.setFillColor(BLUE_ACCENT)
            c.setFont("Helvetica-Bold", 10)
            text_w = c.stringWidth(period["name"], "Helvetica-Bold", 10)
            c.drawString(margin_left + 33 * mm, line_y - 1.5 * mm, period["name"])

            c.line(margin_left + 36 * mm + text_w, line_y, margin_left + content_width, line_y)
            y -= 10 * mm

            for event in period["events"]:
                has_speaker = "speaker" in event
                has_image = "image" in event
                has_co = "co_speaker" in event

                # Estimate space needed
                needed = 14 * mm
                if has_image:
                    needed = 22 * mm
                elif has_speaker:
                    needed = 16 * mm

                if has_co:
                    needed += 8 * mm

                # Check title length for extra space
                title_width = content_width - 20 * mm
                if has_image:
                    title_width = content_width - 35 * mm
                if has_co:
                    title_width = content_width - 50 * mm
                c.setFont("Helvetica-Bold", 9)
                if c.stringWidth(event["title"], "Helvetica-Bold", 9) > title_width:
                    needed += 5 * mm

                y = check_space(c, y, needed)

                # Card background
                card_height = needed - 2 * mm
                card_y = y - card_height + 4 * mm

                c.setFillColor(HexColor("#F8F9FA"))
                c.roundRect(margin_left, card_y, content_width, card_height, 2, fill=True, stroke=False)

                # Blue left accent
                c.setFillColor(DARK_BLUE)
                c.rect(margin_left, card_y, 2 * mm, card_height, fill=True, stroke=False)

                # Time
                c.setFillColor(DARK_BLUE)
                c.setFont("Helvetica-Bold", 9)
                c.drawString(margin_left + 5 * mm, y - 1 * mm, event["time"])

                text_x = margin_left + 20 * mm
                text_max_w = content_width - 25 * mm

                if has_image:
                    # Draw circular photo(s) on the right
                    img_path = os.path.join(BASE, event["image"])
                    circ_img = make_circular_image(img_path, 300)
                    if has_co:
                        # Two photos side by side
                        img_x1 = margin_left + content_width - 42 * mm
                        img_x2 = margin_left + content_width - 22 * mm
                        img_y = card_y + (card_height - 18 * mm) / 2
                        if circ_img:
                            c.drawImage(circ_img, img_x1, img_y, 18 * mm, 18 * mm, mask='auto')
                        co = event["co_speaker"]
                        co_img_path = os.path.join(BASE, co["image"])
                        co_circ = make_circular_image(co_img_path, 300)
                        if co_circ:
                            c.drawImage(co_circ, img_x2, img_y, 18 * mm, 18 * mm, mask='auto')
                        text_max_w = content_width - 68 * mm
                    else:
                        if circ_img:
                            img_x = margin_left + content_width - 22 * mm
                            img_y = card_y + (card_height - 18 * mm) / 2
                            c.drawImage(circ_img, img_x, img_y, 18 * mm, 18 * mm, mask='auto')
                        text_max_w = content_width - 48 * mm

                # Title
                ty = draw_text_wrapped(c, event["title"], text_x, y - 1 * mm, text_max_w, "Helvetica-Bold", 9, HexColor("#1a1a1a"))

                # Speaker info
                if has_speaker:
                    c.setFont("Helvetica", 8)
                    c.setFillColor(GRAY_TEXT)
                    speaker_text = event["speaker"]
                    if has_co:
                        speaker_text = f"{event['speaker']} e {event['co_speaker']['name']}"
                    c.drawString(text_x, ty - 1 * mm, speaker_text)
                    if "role" in event:
                        c.setFont("Helvetica", 7)
                        c.setFillColor(LIGHT_GRAY)
                        role_text = event["role"]
                        if has_co and "role" in event["co_speaker"]:
                            role_text = f"{event['role']}  •  {event['co_speaker']['role']}"
                        c.drawString(text_x, ty - 5 * mm, role_text)

                y -= needed

        y -= 5 * mm

    # Footer disclaimer
    y = check_space(c, y, 20 * mm)
    y -= 5 * mm
    c.setFont("Helvetica", 6)
    c.setFillColor(LIGHT_GRAY)
    disclaimer = "Programação sujeita a alterações, ante a superveniência de fatos imprevisíveis que impossibilitem a participação de palestrante, promovendo-se a adequação orientada pela manutenção do nível de qualidade técnica do evento."
    draw_text_wrapped(c, disclaimer, margin_left, y, content_width, "Helvetica", 6, LIGHT_GRAY)

    c.save()
    print(f"PDF gerado com sucesso: {OUTPUT}")


if __name__ == "__main__":
    generate_pdf()
