// 1. Imports corrigidos (sem useState e com os nomes reais dos seus arquivos)
import fotoHero from './assets/beb8.png';
import fotoGaleria1 from './assets/beb1.jpeg';
import fotoGaleria2 from './assets/beb2.jpeg';
import fotoGaleria3 from './assets/beb3.jpeg';
import fotoGaleria4 from './assets/beb4.jpeg';
import fotoGaleria5 from './assets/beb5.jpeg';
import fotoGaleria6 from './assets/beb6.jpeg';
import videoTrabalho from './assets/video-trabalho.mp4';
import fotoCuidados from './assets/beb7.jpeg'; // Extensão corrigida com o ponto

function App() {
  const telefoneWhatsApp = "5519994530205";
  const linkWhatsApp = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent("Olá Paula! Vi o site e fiquei encantada com o portfólio. Gostaria de saber mais sobre as encomendas! ❤️")}`;

  // 2. Banco de dados limpo e seguro (sem referências a status de venda)
  const bebesGaleria = [
    { id: 1, titulo: "Molde Toddler", detalhe: "Textura de Pele", imagem: fotoGaleria1 },
    { id: 2, titulo: "Molde Recém Nascido", detalhe: "Pintura 3D", imagem: fotoGaleria2 },
    { id: 3, titulo: "Molde Menina", detalhe: "Cabelo Enraizado", imagem: fotoGaleria3 },
    { id: 4, titulo: "Molde Adormecido", detalhe: "Membros Inteiros", imagem: fotoGaleria4 },
    { id: 5, titulo: "Molde Prematuro", detalhe: "Textura de Pele", imagem: fotoGaleria5 },
    { id: 6, titulo: "Molde Menina", detalhe: "Feito à Mão", imagem: fotoGaleria6 },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800 font-sans selection:bg-pink-200 selection:text-pink-900">
      
      {/* CABEÇALHO */}
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-pink-600 tracking-tight">Ateliê da Paula</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-zinc-500">
            {['Início', 'Galeria', 'Sobre a Artista', 'Cuidados'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-pink-600 transition-colors py-2">{item}</a>
            ))}
          </div>

          <a 
            href={linkWhatsApp} target="_blank" rel="noopener noreferrer"
            className="bg-white border-2 border-pink-200 text-pink-600 font-bold px-6 py-2 rounded-full text-sm hover:bg-pink-50 transition-all shadow-sm flex items-center gap-2"
          >
            Falar no Zap
          </a>
        </div>
      </nav>

      {/* SEÇÃO HERÓI */}
      <section id="início" className="relative py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left space-y-8">
            <span className="inline-block bg-white text-pink-600 font-bold text-xs uppercase tracking-widest px-5 py-2 rounded-full shadow-sm border border-zinc-200">
              Transformando Sonhos em Realidade
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-zinc-900 leading-[1.1]">
              O Bebê Reborn <br/><span className="text-pink-500">Perfeito</span> para Você
            </h1>
            <p className="text-lg text-zinc-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
              Cada traço, cada fio de cabelo e cada detalhe são feitos à mão com materiais premium. Mais que artesanato, entregamos companheiros de vida.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={linkWhatsApp} target="_blank" rel="noopener noreferrer"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-pink-200 transition-transform transform active:scale-95 flex justify-center items-center gap-3"
              >
                <span>Solicitar Orçamento</span>
              </a>
              <a 
                href="#galeria" 
                className="text-zinc-600 font-bold px-8 py-4 flex items-center justify-center gap-2 hover:bg-zinc-200/50 rounded-full transition-colors"
              >
                Ver Galeria <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative aspect-[4/5] bg-white rounded-[2.5rem] shadow-2xl p-4 border border-zinc-100 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img src={fotoHero} alt="Bebê Reborn realista dormindo em uma cesta" className="w-full h-full object-cover rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO GALERIA DE ADOÇÕES */}
      <section id="galeria" className="py-24 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-zinc-900">Nosso <span className="text-pink-500">Portfólio</span></h2>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg font-medium">
              Conheça alguns dos projetos desenvolvidos pelo ateliê. O realismo impressionante é fruto de horas de dedicação exclusiva a cada obra.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bebesGaleria.map((bebe) => (
              <div key={bebe.id} className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100">
                
                <img src={bebe.imagem} alt={bebe.titulo} className="w-full h-full object-cover" />
                
                {/* 3. Overlay limpo, sem o bloco de status que causou o erro no seu projeto */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/95 via-zinc-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-black text-white mb-1">{bebe.titulo}</h3>
                  <p className="text-zinc-300 text-sm font-medium">{bebe.detalhe}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SEÇÃO: GUIA DE CUIDADOS */}
      <section id="cuidados" className="py-24 bg-zinc-900 text-zinc-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-pink-400 font-bold text-sm uppercase tracking-widest">Essencial</span>
            <h2 className="text-4xl font-black leading-tight">Guia de Cuidados com seu Bebê Reborn</h2>
            <p className="text-zinc-400 text-lg">
              Bebês Reborn não são brinquedos comuns, são obras de arte delicadas. Siga estas instruções para manter a pintura e os fios intactos por gerações.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400">💧</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Evite umidade e calor extremo</h4>
                  <p className="text-zinc-400 text-sm">Nunca dê banho no seu bebê (a menos que seja de silicone sólido apropriado) e não o deixe no carro ao sol.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400">🧴</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Produtos Químicos</h4>
                  <p className="text-zinc-400 text-sm">Não use perfumes diretamente no corpo ou cabelo. Aplique apenas nas roupinhas antes de vestir.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400">🪮</div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Escovação com Carinho</h4>
                  <p className="text-zinc-400 text-sm">Use escovas de bebê com cerdas macias. O cabelo é enraizado fio a fio e pode ser arrancado com força excessiva.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-800 rounded-[3rem] aspect-square flex items-center justify-center border border-zinc-700 overflow-hidden">
             <img src={fotoCuidados} alt="Detalhes da pintura reborn" className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black text-white tracking-tight">Ateliê da Paula</span>
          </div>
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ateliê da Paula Bebês Reborn. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
             <a href={linkWhatsApp} className="hover:text-pink-500 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;