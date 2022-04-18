## Components
- App: Store most information and functions
- Home: To hold the Search and Gallery components
- Search: Holds the form element where users will type a wallet address
- Gallery: Holds the carousel element where the NFTs will render 

## States 
```
    const [searchBar, setSearchBar] = useState();
	const [data, setData] = useState();
	const [galleryItems, setGalleryItems] = useState([]);
```