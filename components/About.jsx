import Image from "next/image";

export const metadata = {
  title: "about us - page",
  description: "Intoduction Brabus Company History, Teams and Culture",
};

function AboutUs() {
  return (
    <div>
      <div className=''>
        <div className='max-w-3xl mx-auto mb-24'>
          <h1 className='mt-20 text-center xl:text-4xl text-2xl font-semibold'>
            Tentang Neue Grade Motoclub
          </h1>
          <p className='xl:text-lg text-sm text-center mt-7 px-5 leading-7'>
            Neue Grade Motoclub adalah sebuah komunitas motor yang didirikan
            pada tahun 2020 di jakarta. Sejak awal berdirinya, klub ini telah
            menjadi rumah bagi para pecinta motor yang bersemangat dan
            berkomitmen untuk mengembangkan budaya motor di lingkungan
            sekitarnya.
          </p>
          <h1 className='mt-20 text-center xl:text-4xl text-2xl font-semibold'>
            Sejarah Singkat
          </h1>
          <div className='max-w-4xl mx-auto xl:text-lg text-sm px-5'>
            <br />
            Neue Grade Motoclub bermula dari sekelompok teman yang memiliki
            minat yang sama dalam dunia motor. Dari kebersamaan dan semangat
            yang sama, klub ini resmi didirikan dengan tujuan untuk membawa
            bersama komunitas motor yang beragam, mulai dari pengendara pemula
            hingga yang berpengalaman.
            <br />
            <br />
            Seiring berjalannya waktu, Neue Grade Motoclub telah tumbuh menjadi
            salah satu komunitas motor yang paling dihormati di wilayah ini.
            Kami terus mengadakan berbagai acara dan kegiatan, mulai dari
            perjalanan kelompok hingga amal untuk membantu masyarakat setempat.
            Semangat persaudaraan dan kebersamaan adalah inti dari klub kami,
            dan kami terus berusaha untuk memperkuat ikatan di antara para
            anggota.
          </div>
          <h1 className='mt-20 text-center xl:text-4xl text-2xl font-semibold'>
            Misi Kami
          </h1>
          <div className='max-w-4xl mx-auto xl:text-lg text-sm px-5'>
            <br />
            Misi Neue Grade Motoclub adalah untuk menjadi wadah bagi pecinta
            motor untuk berbagi pengalaman, pengetahuan, dan kecintaan mereka
            terhadap dunia motor. Kami berkomitmen untuk mempromosikan
            keselamatan berkendara, menghormati etika berkendara yang baik,
            serta berperan aktif dalam membantu komunitas sekitar.
          </div>
          <h1 className='mt-20 text-center xl:text-4xl text-2xl font-semibold'>
            Bergabunglah dengan Kami
          </h1>
          <div className='max-w-4xl mx-auto xl:text-lg text-sm px-5'>
            <br />
            Jika Anda adalah seorang pengendara motor yang bersemangat dan
            mencari komunitas yang ramah dan mendukung, maka Neue Grade Motoclub
            adalah tempat yang tepat untuk Anda. Bergabunglah dengan kami dan
            jadilah bagian dari perjalanan kami dalam mengembangkan budaya motor
            yang positif dan bermakna.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
