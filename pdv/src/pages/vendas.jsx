import React from 'react';
import '../style/vendas.scss';

const Vendas = () => {
    return (
        <div className='vendas'>
            VENDAS
                <div>
                    <svg version="1.2" className="quiz-graph">
                        <rect x="50" width="calc(100% - 50px)" height="300px" fill="url(#grid)" stroke="gray"></rect>

                        <g className="label-title">
                            <text x="-160" y="5" transform="rotate(-90)">Vendas</text>
                        </g>
                        <g className="label-title">
                            <text x="50%" y="350">Meses</text>
                        </g>
                        <g className="x-labels">
                            <text x="150" y="320">Jan</text>
                            <text x="250" y="320">Fev</text>
                            <text x="350" y="320">Mar</text>
                            <text x="450" y="320">Abr</text>
                            <text x="550" y="320">Maio</text>
                            <text x="650" y="320">Jun</text>
                        </g>
                        <g className="y-labels">   
                            <text x="42" y="55">250</text>
                            <text x="42" y="105">200</text>   
                            <text x="42" y="155">150</text>
                            <text x="42" y="205">100</text>   
                            <text x="42" y="255">50</text>
                        </g>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#5F08B6', stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }}></stop>
                        </linearGradient>
                        <polyline fill="url(#grad)" stroke="#5F08B6" strokeWidth="0" points="
                        50,250
                        51,0
                        150,100
                        250,80
                        350,160
                        450,100
                        550,100
                        650,150
                        750,200
                        750,250
                        "></polyline>

                        <polyline fill="none" stroke="#5F08B6" strokeWidth="2" points="
                        50,00
                        150,100
                        250,80
                        350,160
                        450,100
                        550,100
                        650,150
                        750,200
                        "></polyline>
                        <g>
                            
                            <circle className="quiz-graph-dot" cx="150" cy="100" data-value="8.1" r="6" q-title="Q1" answer-count="200" percent-value="66%"></circle>
                            <circle className="quiz-graph-dot" cx="250" cy="80" data-value="7.7" r="6" q-title="Q2" answer-count="220" percent-value="73%"></circle>
                            <circle className="quiz-graph-dot" cx="350" cy="160" data-value="6.8" r="6" q-title="Q3" answer-count="140" percent-value="46%"></circle>
                            <circle className="quiz-graph-dot" cx="450" cy="100" data-value="6.7" r="6" q-title="Q4" answer-count="200" percent-value="66%"></circle>
                            <circle className="quiz-graph-dot" cx="550" cy="100" data-value="6.7" r="6" q-title="Q5" answer-count="200" percent-value="66%"></circle>
                            <circle className="quiz-graph-dot" cx="650" cy="150" data-value="6.7" r="6" q-title="Q6" answer-count="150" percent-value="50%"></circle>
                            <circle className="quiz-graph-dot" cx="750" cy="200" data-value="6.7" r="6" q-title="Complited Quiz" answer-count="100" percent-value="33%"></circle>
                        </g>
                    </svg>
                </div>
            </div>
        
    );
};

export default Vendas;
