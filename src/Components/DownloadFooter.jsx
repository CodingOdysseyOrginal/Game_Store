import { Link } from "react-router-dom"

export default function DownloadFooter(){
    return(
        <div className="copyright container">
        <Link src="/Game_Store" className="logo">Game<span>Store</span></Link>
        <p>&#169; CodingOdsessy All Rights Reserved</p>
      </div>
    )
}