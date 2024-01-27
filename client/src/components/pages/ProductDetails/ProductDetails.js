const ProductDetails = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => getUser(state));
    const  {id}  = useParams();
    const product = useSelector(state => getProductById(state, id));
    const [quantity, setQuantity] = useState(1);
    const productId = product.id;
    const photos = product.photo.split(' ');
    const images = [];
    return (
        <div>
            Hallo!
        </div>
      
    );
  }
  
  export default ProductDetails;