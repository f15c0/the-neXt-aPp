import Link from "next/link";
import Image from "next/image";
const NotFound = () => {
    return (
        <div className="notFound">
            <Image className="blob" src='/blob.svg' width={500} height={200} />
            <h1>Oops...! </h1>
            <h5>This Page is not found!</h5>
            <h3>Go back to:
                <Link href="/"><a>HomePage</a></Link>

            </h3>
        </div>
      );
}
 
export default NotFound;