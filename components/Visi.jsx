import Image from "next/image";

export default function Visi() {
  return (
    <div className=''>
      <div className='max-w-3xl mx-auto mb-24'>
        <h1 className='mt-20 text-center xl:text-4xl text-2xl font-semibold'>
          VISI
        </h1>
        <p className='xl:text-lg text-sm text-center mt-7 px-5 leading-7'>
          Menjadi klub motor yang diakui secara nasional sebagai pusat kegiatan
          dan komunitas yang berdedikasi untuk mempromosikan semangat
          persaudaraan, keselamatan berkendara, dan kontribusi positif terhadap
          masyarakat.
        </p>
      </div>

      <section id='history'>
        <h2 className='mb-5 text-center xl:text-4xl text-2xl font-medium'>
          MISI
        </h2>
        <div className='max-w-4xl mx-auto xl:text-lg text-sm px-5'>
          <ol className='list-decimal pl-5 mb-24'>
            <li>
              Membangun komunitas yang solid dan inklusif bagi para penggemar
              motor dari berbagai latar belakang untuk saling berbagi
              pengetahuan, pengalaman, dan keahlian dalam berkendara.
            </li>
            <li>
              Mengadakan kegiatan berkendara yang aman dan bertanggung jawab,
              serta mempromosikan kesadaran akan pentingnya keselamatan dalam
              berlalu lintas.
            </li>
            <li>
              Berpartisipasi aktif dalam kegiatan sosial dan kegiatan amal yang
              bertujuan untuk memberikan manfaat bagi masyarakat sekitar dan
              lingkungan.
            </li>
            <li>
              Menyediakan platform untuk pertukaran informasi, pelatihan, dan
              pengembangan keterampilan berkendara bagi anggota klub.
            </li>
            <li>
              Menjalin kemitraan dengan pihak-pihak terkait, seperti pemerintah
              daerah, lembaga keselamatan berkendara, dan perusahaan terkait,
              untuk meningkatkan kesadaran dan keamanan berkendara di
              masyarakat.
            </li>
            <li>
              Memperluas jaringan klub motor melalui kolaborasi dengan klub-klub
              sejenis di berbagai wilayah guna memperkuat solidaritas dan
              memperluas dampak positif klub terhadap komunitas.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
