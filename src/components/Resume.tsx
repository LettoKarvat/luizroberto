import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Target,
  User,
  GraduationCap,
  Briefcase,
  BookOpen,
  Settings,
  Calendar,
} from "lucide-react";

interface ResumeProps {
  onGeneratePDF: () => void;
}

// Número em formato internacional, apenas dígitos (DDI + DDD + número)
const PHONE_NUMBER_RAW = "5547998078706";

const Resume: React.FC<ResumeProps> = ({ onGeneratePDF }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header com botão de PDF */}
      <div className="flex justify-between items-center mb-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white print:hidden">
        <h1 className="text-2xl font-bold">Currículo</h1>
        <button
          onClick={onGeneratePDF}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
        >
          📄 Gerar PDF
        </button>
      </div>

      {/* Currículo Content */}
      <div id="resume-content" className="p-8 space-y-8">
        {/* Header do Currículo */}
        <div className="text-center border-b-4 border-blue-600 pb-6">
          <div className="mb-4">
            <span className="text-4xl">🧾</span>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">
              Currículo Luiz Roberto Santos de Lima
            </h1>
          </div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Luiz Roberto Santos de Lima
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Piên – Paraná</span>
            </div>
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline focus:underline"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span>(47) 9 9807-8706</span>
            </a>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>luiz_roberto2012@hotmail.com</span>
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">🎯 Objetivo</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Atuar como operador de máquina, contribuindo para o crescimento da
            empresa e alcançando desenvolvimento pessoal e profissional. Busco
            uma oportunidade onde meus esforços e dedicação sejam reconhecidos.
          </p>
        </section>

        {/* Perfil Profissional */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <User className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">
              🧑‍🔧 Perfil Profissional
            </h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>
              • Profissional com experiência no setor industrial e logístico,
              com facilidade em aprender novas funções.
            </p>
            <p>
              • Sou proativo, comunicativo, atento aos detalhes e tenho
              facilidade para trabalhar em equipe ou de forma independente.
            </p>
            <p>
              • Comprometido com a qualidade do serviço e sempre disposto a
              ajudar os colegas.
            </p>
          </div>
        </section>

        {/* Formação Acadêmica */}
        <section className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-bold text-gray-800">
              🎓 Formação Acadêmica
            </h3>
          </div>
          <p className="text-gray-700 font-medium">Ensino Médio Completo</p>
        </section>

        {/* Experiência Profissional */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">
              💼 Experiência Profissional
            </h3>
          </div>

          <div className="space-y-6">
            {/* Motherson */}
            <div className="border-l-4 border-blue-600 pl-6 pb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Motherson – Campo Alegre – SC
                </h4>
                <p className="text-blue-600 font-semibold mb-2">
                  Operador de Logística I
                </p>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    📅 Desde 22/04/2024 (emprego atual)
                  </span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Atividades voltadas à logística interna e organização de
                    materiais
                  </li>
                  <li>• Apoio ao setor de produção e controle de estoque</li>
                  <li>
                    • Agilidade e atenção no manuseio de cargas e movimentação
                  </li>
                </ul>
              </div>
            </div>

            {/* Buddemeyer */}
            <div className="border-l-4 border-gray-400 pl-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Buddemeyer S.A
                </h4>
                <p className="text-gray-600 font-semibold mb-2">
                  Operador Têxtil de Tinturaria
                </p>
                <div className="flex items-center gap-2 mb-4 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">📅 09/02/2023 – 16/02/2024</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Atuação no setor têxtil, área de tinturaria</li>
                  <li>
                    • Operação de máquinas específicas para tingimento de
                    tecidos
                  </li>
                  <li>• Controle de processos de produção e qualidade</li>
                  <li>• Colaboração em equipe para cumprimento de metas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Formação Complementar */}
        <section className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-bold text-gray-800">
              📘 Formação Complementar
            </h3>
          </div>
          <p className="text-gray-700">
            <strong>Curso de Operação de Empilhadeira</strong> – Motherson
            (2024)
          </p>
        </section>

        {/* Competências e Habilidades */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-bold text-gray-800">
              🛠️ Competências e Habilidades
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Proatividade e iniciativa
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Boa comunicação e facilidade de relacionamento
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Atenção aos detalhes e cuidado com o serviço
              </p>
            </div>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Capacidade de aprendizado rápido
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Trabalho em equipe e autonomia
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
