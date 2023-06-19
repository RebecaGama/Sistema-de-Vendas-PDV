import React from 'react';
import '../style/produtos.scss';

const Produtos = () => {
  return (
    <div className='produtos'>
      <div className='produtos'>
        <section className="main-header grid">
          <h1>PRODUTOS</h1>
          <button className="button">
            <i className="fa-solid fa-plus"></i>
            <span>Adicionar</span>
          </button>
        </section>

        <section className="table-header grid">
          <div>
            <div className="select">
              <select>
                <option>Escolher ação</option>
              </select>
            </div>
            <span>Selecionado 4 de 10 itens</span>
          </div>
          <a className="button link">
            <span>Filtro</span>
            <i className="fa-solid fa-angle-down"></i>
          </a>
        </section>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="test"></div>
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark minus"></span>
                  </div>
                </th>
                <th>Cod</th>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Estoque</th>
                <th>Preço</th>
              </tr>
            </thead>

            <tbody>
              <tr className="selected">
                <td>
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0101</td>
                <td>Copo de Vidro Transparente</td>
                <td>Copos</td>
                <td>50 unidades</td>
                <td>R$ 5,99</td>
              </tr>

              <tr className="selected">
                <td>
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0201</td>
                <td>Prato Raso de Porcelana</td>
                <td>Pratos</td>
                <td>30 unidades</td>
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
                <td>Talheres</td>
                <td>20 conjuntos</td>
                <td>R$ 29,99</td>
              </tr>

              <tr className="selected">
                <td>
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0102</td>
                <td>Copo Térmico de Aço Inoxidável</td>
                <td>Copos</td>
                <td>15 unidades</td>
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
                <td>Pratos</td>
                <td>25 unidades</td>
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
                <td>Talheres</td>
                <td>50 unidades</td>
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
                <td>Copos</td>
                <td>10 conjuntos</td>
                <td>R$ 12,99</td>
              </tr>

              <tr className="selected">
                <td>
                  <div className="checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0203</td>
                <td>Prato de Plástico Descartável</td>
                <td>Pratos</td>
                <td>100 unidades</td>
                <td>R$ 3,99</td>
              </tr>

              
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0303</td>
                <td>Garfo de Aço Inoxidável</td>
                <td>Talheres</td>
                <td>50 unidades</td>
                <td>R$ 1,99</td>

              <tr>
                <td>
                  <div className="checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </div>
                </td>
                <td>0104</td>
                <td>Copo de Vidro Colorido</td>
                <td>Copos</td>
                <td>20 unidades</td>
                <td>R$ 4,99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
