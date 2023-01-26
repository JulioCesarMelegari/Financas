import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    item: Item
}

export function TableItem({ item }: Props) {
    return(
        <C.TableLine>
            <C.TableColum>...</C.TableColum>
            <C.TableColum>{item.category}</C.TableColum>
            <C.TableColum>{item.title}</C.TableColum>
            <C.TableColum>R$ {item.value}</C.TableColum>
        </C.TableLine>
    );
}