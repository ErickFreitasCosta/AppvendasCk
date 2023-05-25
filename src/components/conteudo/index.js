import './conteudo.css'
import Fone from '../images/fone.png'
import SSD from '../images/ssd.png'
import Nome from '../navbar';

function Conteudo() {
    return (
      <div>
        <div className='centralizar'>
          <h1><u>Produtos Disponíveis</u></h1>
          
          <div className='box1'>
            <div className='produto'>
              <img src={Fone} className='produtos'/>
               </div>
            <div className='Informacao'>
              <h5>NJBG A6S TWS Fone De Ouvido Sem Fio Bluetooth 5.0 Estéreo Macaron Mini Fones Para Android Ios</h5>
              <br></br>
              <p>
              <strong><u>Descrição:</u></strong>
              Controle de um botão facilmente para ligar/desligar, reproduzir/pausar/trocar música, mãos livres chamando para dirigir, trabalhar, reunião, correndo.
              Uma a duas conexões, pode ser conectado a dois telefones celulares ao mesmo tempo.
              Compatibilidade inteligente: suporte todos os telefones celulares Bluetooth, tablet, notebook, música QQ, filmes, etc., universal todo o telefone móvel.
              <br></br>

              <u>Especificações:</u>
              1.Versão Bluetooth: V5.0
              2.Distância Bluetooth: 10m
              3.Tempo de carregamento: cerca de 1-2 horas
              4.Tempo de espera: cerca de 80 horas
              5.Tempo de Música: cerca de 3 horas
              6.Tempo de conversação: cerca de 4 horas
              7.Bateria do fone de ouvido: Bateria de lítio de polímero 45mAh
              8.Bateria da caixa da bateria: Bateria de lítio de polímero 280mAh
              9.Formato de transmissão de áudio: HFP/A2DP/HSP/AVRCP
              </p>
            </div>  
          </div>

      
        </div>

        <div className='centralizar'>
        <div className='box1'>
          <div className='produto'>
              <img src={SSD} className='produtos'/>
               </div>

          <div className='Informacao'>
            <h5>KingSpec SATA3 512GB</h5>
            <p>Disco rígido interno de estado sólido KingSpec SATA3 128GB 256GB 512GB SSD HDD SATAIII 120 G 240 G 1TB 2T 4T para Desktop Laptop</p>
            <p>Max Sequential Write: 500MbpsMax Sequential Read: 550MbpsProtocolo de transporte: AHCITipo de barramento: SATA IIIRGB: noAleta de refrigeração: NãoEmbalagem: SimTipo de memória Nand Flash: TLCControlador: OtherTamanho: 2.5"Tipo de Interface: SATAIIIAplicação: computador de mesa,LaptopNome da marca: KingSpecOrigem: CN (Origem)Tipo: InternoEstilo: SSDCertificado: CE,FCC,ROHS,KCType: SATAIII SSD 128GB 256GB 512GB for laptop desktopInterface: SATA3Use for: Laptop/Desktop/Notebook/ <br></br>Computers and other device with SATA portCapacity: 128GB 256gb 512gb 1TB 2TB SSD hard driveAverage Access time: 0.2 msWarranty: 3 yearsInterface Type: SATA (6Gbps), SATA3(6Gbps)NAND Flash: TLC/QLCColor 120gb 240gb: Black or Golden</p>
          </div>
          </div>

        </div>




      </div>
    );
  }
  
  export default Conteudo;