import Cardwisata from "./Cardwisata";
import Hero from "./Hero";
import waterboom from "./../assets/waterboom.jpg";
import musium from "./../assets/musium3.jpg";
import camping from "./../assets/camp2.jpg";



const Maincontent = ()=>{
    return (
        <div>
            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1>Ragam Wisata Kota Bandung</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-4">
                        <Cardwisata image={waterboom} title="Wisata Air" deskripsi="Wisata air atau Waterpark adalah sebuah taman hiburan yang menampilkan tempat bermain dengan air sebagai objek utamanya. Macam macam arena yang ada di dalam tempat wisata waterpark seperti seluncuran, kolam air mancur, taman air mancur, kolam renang, dan lingkungan untuk berjalan kaki."/>
                    </div>
                    <div className="col-4">
                        <Cardwisata image={musium} title="Wisata Budaya" deskripsi="Museum adalah salah satu daya tarik wisata budaya. Artefak atau benda warisan budaya yang menjadi koleksi dan bahan pameran dari suatu museum sering menjadi daya tarik wisata. Aneka ragam benda budaya yang menjadi koleksi sebuah museum biasanya merupakan milik berbagai etnik dan berasal dari beberapa daerah."/>
                    </div>
                    <div className="col-4">
                        <Cardwisata image={camping} title="Wisata Alam" deskripsi="Wisata alam adalah kegiatan perjalanan atau sebagian dari kegiatan tersebut yang dilakukan secara sukarela serta bersifat sementara untuk menikmati gejala keunikan dan keindahan alam di kawasan suaka margasatwa, taman nasional, taman hutan raya, dan taman wisata alam. Pengelolaan pariwisata alam tidak lepas dari kegiatan interpretasi."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maincontent;