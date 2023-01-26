import * as C from './styles';

export function TableArea() {
    return(
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColum>Data</C.TableHeadColum>
                    <C.TableHeadColum>Categoria</C.TableHeadColum>
                    <C.TableHeadColum>Titulo</C.TableHeadColum>
                    <C.TableHeadColum>Valor</C.TableHeadColum>
                </tr>
            </thead>
        </C.Table>
    )
}