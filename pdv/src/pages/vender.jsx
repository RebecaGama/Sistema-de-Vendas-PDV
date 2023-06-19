import React from 'react';
import '../style/vender.scss';

const Vender = () => {
    return (
        <div className='vender'>
            <div className='vender'>
                <section className="main-header grid">
                <h1>VENDER</h1>
                </section>
                <section className="table-header grid">
                <div>
                    <div className="select">
                    <select>
                        <option>Categorias</option>
                    </select>
                    </div>
                    <span>Selecionado 0 de 10 itens</span>
                </div>
                </section>
                <div className="cards-container">
                <div className="card2">
          <table>
            <thead>
              <tr>
              <th>
                  <div className="test"></div>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark minus"></span>
                  </div>
                </th>
                <th>Cod</th>
                <th>Nome</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0101</td>
                <td>Copo de Vidro Transparente</td>
                <td>R$ 5,99</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0201</td>
                <td>Prato Raso de Porcelana</td>
                <td>R$ 9,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0301</td>
                <td>Conjunto de Talheres Inox</td>
                <td>R$ 29,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0102</td>
                <td>Copo Térmico de Aço Inoxidável</td>
                <td>R$ 19,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0202</td>
                <td>Prato Fundo de Cerâmica</td>
                <td>R$ 7,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0302</td>
                <td>Colher de Sobremesa em Inox</td>
                <td>R$ 1,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0103</td>
                <td>Conjunto de Copos Coloridos</td>
                <td>R$ 12,99</td>
              </tr>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0203</td>
                <td>Prato de Plástico Descartável</td>
                <td>R$ 3,99</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0303</td>
                <td>Garfo de Aço Inoxidável</td>
                <td>R$ 1,99</td>
              </tr>
              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0104</td>
                <td>Copo de Vidro Colorido</td>
                <td>R$ 4,99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card3">
                    <button className="button">
                        <i className="fa-solid fa-plus"></i>
                        <span>Cliente</span>
                    </button>
              <div className="carrinho">Clique nos produtos para adicioná-los à venda</div>
                    <button className="button fim">
                        <span>Finalizar</span>
                    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vender;
