import {useDispatch, useSelector} from "react-redux";

export default function useCatalog() {
    //@ts-ignore
    const catalog = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const pushCatalog = () => {
        //@ts-ignore

    }
    pushCatalog();

    return {
        catalog,
        pushCatalog
    }
}
