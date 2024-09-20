
import * as React from 'react';
import { Typography } from "@mui/material";
import './style.css';
import ClanForEachModule from '../../atoms/ClanForEachModule/ClanForEachModule';

// interface TableData {
//     data: number[];
//     labels: string[];
//     colors: string[];
//   }


const TopClansForEachModule: React.FC = () => {
    return (
        <>
            <div className="topClansForEachModule">
                <Typography
                ><h2>Top Clanes por modulo</h2>
                
                <div className="topClanForEachModule">
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                                <td><ClanForEachModule /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Fundamentos</th>
                                <th>HTML & CSS</th>
                                <th>Javascript</th>
                                <th>Javascript</th>
                                <th>Ruta Avanzada</th>
                            </tr>
                               
                        </tfoot>
                    </table>
                </div>
                </Typography>
            </div>

        </>
    )
}

export default TopClansForEachModule; 