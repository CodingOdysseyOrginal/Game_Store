import { Link } from "react-router-dom"

export default function DownloadFooter(){
    return(
        <div className="copyright container">
        <Link src="/" className="logo">Game<span>Store</span></Link>
        <p>&#169; CodingOdsessy All Rights Reserved</p>
      </div>
    )
}