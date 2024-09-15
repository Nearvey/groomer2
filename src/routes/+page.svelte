<script>
  import landing from "$lib/assets/landing.png";
  import dogs1 from "$lib/assets/cut.png";
  import dogs2 from "$lib/assets/bath.png";
  import dogs3 from "$lib/assets/upkeep.png";
  import aboutdog from "$lib/assets/me.png";
  import add from "$lib/assets/add.png";
  import ear from "$lib/assets/ear.png";
  import landing1 from "$lib/assets/landing1.png";
  import pawprint from "$lib/assets/pawprint.png";
  import scissors from "$lib/assets/scissors.png";
  import shower from "$lib/assets/shower.png";
  
  import gallery1 from "$lib/assets/gallery1.jpg";
  import gallery2 from "$lib/assets/gallery2.jpg";
  import gallery3 from "$lib/assets/gallery3.jpg";
  import gallery4 from "$lib/assets/gallery4.jpg";
  import { base } from "$app/paths";
</script>

<div
  class="w-full h-screen px-10 bg-secondary-500 bg-cover bg-center bg-no-repeat bg-top bg-[url('/src/lib/assets/landing4.jpeg')] font-Akaya"
>
  <div class="flex flex-col items-center justify-center h-full lg:items-start">
    <!-- <img src={landing} alt="" /> -->
    <span class="px-4 text-4xl text-center lg:text-6xl text-white"
      >Zajmiemy <br /> się Twoim <br /> pupilem!</span
    >
    <a
      href="/"
      class="px-4 py-4 mt-4 text-4xl rounded-full lg:text-6xl bg-primary-500 hover:bg-primary-600"
      >Umów się!</a
    >
  </div>
</div>

<div id="offer" class="flex flex-col font-Akaya sm:flex-row bg-tertiary-500 border-t-8 border-tertiary-600">
  <div class="sm:w-1/3">
    <img src={dogs1} alt="" class="w-full" />
    <div class="">
      <div class="py-6 xl:px-16 sm:px-8">
        <h2 class="text-4xl text-center">Strzyżenie</h2>
        <span class="w-full text-2xl text-justify"
          >[Tekst1]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          molestie libero in neque blandit porta. Nullam nec odio auctor.</span
        >
      </div>
    </div>
  </div>
  <div class="sm:w-1/3">
    <img src={dogs2} alt="" class="w-full" />
    <div class="bg-tertiary-500">
      <div class="py-6 xl:px-16 sm:px-8">
        <h2 class="text-4xl text-center">Kąpiel</h2>
        <span class="w-full text-2xl text-justify"
          >[Tekst2]Phasellus porttitor, erat maximus rhoncus ultrices, est arcu
          facilisis risus, vitae tincidunt est massa a ex.
        </span>
      </div>
    </div>
  </div>
  <div class="sm:w-1/3">
    <img src={dogs3} alt="" class="w-full" />
    <div class="bg-tertiary-500">
      <div class="py-6 xl:px-16 sm:px-8">
        <h2 class="text-4xl text-center">Pielęgnacja</h2>
        <span class="w-full text-2xl text-justify"
          >[Tekst3]Donec pretium, libero scelerisque pellentesque blandit, urna
          risus pharetra sapien, ut semper sem enim in metus.
        </span>
      </div>
    </div>
  </div>
</div>

<div id="gallery" class="bg-tertiary-500 flex justify-center flex-wrap p-16">
  <div class="w-full xl:w-1/4 lg:w-1/3 lg:mr-16 mb-16 border-8 border-primary-500 rounded">
    <img src={gallery1} alt="">
  </div>
  <div class="w-full xl:w-1/4 lg:w-1/3 lg:mr-16 mb-16 border-8 border-primary-500 rounded">
    <img src={gallery2} alt="">
  </div>
  <div class="w-full xl:w-1/4 lg:w-1/3 lg:mr-16 mb-16 border-8 border-primary-500 rounded">
    <img src={gallery3} alt="">
  </div>
  <div class="w-full xl:w-1/4 lg:w-1/3 lg:mr-16 mb-16 border-8 border-primary-500 rounded">
    <img src={gallery4} alt="">
  </div>
</div>

<div class="px-2 sm:px-16 bg-secondary-500 font-Akaya">
  <div class="py-8">
    <div class="flex flex-col sm:flex-row items-center">
      <img
        src={scissors}
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Pielęgnacja podstawowa</h3>
        <h2 class="text-3xl">Kąpiel 3-etapowa + pazurki</h2>
        <ul class="text-2xl list-disc list-inside">
          <li>Pieski do 5kg: 70 zł/h</li>
          <li>Pieski od 5-10kg: 100 zł/h</li>
          <li>Pieski od 10-15kg: 130 zł/h</li>
          <li>Pieski od 15-25kg: 180 zł/h</li>
          <li>Pieski powyżej 25kg: Cena ustalana indywidualnie</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="price" class="py-8">
    <div class="flex flex-col sm:flex-row items-center">
      <img
        src={shower}
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Pielęgnacja kompleksowa dla psów strzyżonych</h3>
        <h2 class="text-3xl">Kąpiel 3-etapowa + strzyżenie + higiena uszu + okolice uszu + pazurki</h2>
        <ul class="text-2xl list-disc list-inside">
          <li>Pieski do 5kg: 130 zł+</li>
          <li>Pieski od 5-10kg: 140 zł+</li>
          <li>Pieski od 10-15kg: 160 zł+</li>
          <li>Pieski od 15+: 200 zł+</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-8">
    <div class="flex flex-col sm:flex-row items-center">
      <img
        src={ear}
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Pielęgnacja kompleksowa dla psów podszerstkowych</h3>
        <h2 class="text-3xl">Kąpiel 3-etapowa + strzyżenie + higiena uszu + okolice uszu + pazurki</h2>
        <ul class="text-2xl list-disc list-inside">
          <li>Pieski do 6kg: 130 zł+</li>
          <li>Pieski od 6-15kg: 150 zł+</li>
          <li>Pieski od 15+: 260 zł+</li>
          <br>
          <li>Trymowanie: 130 zł/h</li>
          <li>Wizyta adaptacyjna dla szczeniaków: Gratis</li>
          <li>Podcięcie pazurków: 20 zł</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div class="py-8">
    <div class="flex flex-col sm:flex-row items-center">
      <img
        src={pawprint}
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Pielęgnacja pazurów</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>Obcinanie pazurów: 30-50 PLN</li>
        </ul>
      </div>
    </div>
  </div> -->

  <div class="py-8">
    <div class="flex flex-col sm:flex-row items-center">
      <img
        src={add}
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Dodatkowe koszta do cen podstawowych</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>Kołtuny: 30 zł+</li>
          <li>Filc: 30 zł+</li>
          <li>Niewspółpracujący pies: 30zł</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-8 text-xl">
    Uwaga: Podane ceny mają charakter orientacyjne. Ostateczna cena usługi jest uzależniona od kondycji i rodzaju szaty oraz zachowania pieska.
    Zachęcamy do kontaktu w celu uzyskania dokładnej wyceny.
  </div>
</div>

<div id="about" class="px-24 py-8 text-white bg-primary-500 font-Akaya">
  <h1 class="text-8xl">O nas</h1>
  <div class="flex flex-col md:flex-row">
    <img src={aboutdog} alt="" class="md:h-64 lg:h-96 rounded-xl mr-6 mb-6" />
    <span class="block text-xl"
      >Mam na imię Natalia Hercog-Brzóska i jestem założycielką Natsuenio
      Grooming. Z wykształcenia jestem technikiem weterynarii. Od najmłodszych
      lat związana jestem z kynologią. Szesnaście lat temu stawiałam pierwsze
      kroki na wystawach psów rasowych organizowanych przez Związek Kynologiczny
      w Polsce. W moim życiu psy były od zawsze, ale 1,5 roku temu pojawiła się
      Ona -Abbie pomeranianka- prezeska Natsuenio Grooming i matka rodu hodowli
      Natsuenio FCI. To dzięki niej postanowiłam rozwijać się w tym
      zawodzie…Kocham moją pracę, kompletnie przepadałam. Daję z siebie wszystko
      abyście Państwo byli zadowoleni z efektów a moi najważniejsi klienci czuli
      się komfortowo i aby wizyta w moim salonie kojarzyła im się z relaksem i
      bezpieczeństwem a powroty na kolejne wizyty budziły radość.
      <br />Do zobaczenia w Natsuenio Grooming- Natalia
    </span>
  </div>
</div>

<div id="contact" class="px-24 py-8 text-white bg-secondary-500 font-Akaya">
  <h1 class="text-8xl">Kontakt</h1>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/3">
      <p class="mb-8 text-3xl">
        Adres: <br />
        ul. Skryta 99 <br />
        Plewiska (obok Poznania) <br />
        <br />
        Telefon: <br />
        662 696 909<br />
        <br />
        Godziny otwarcia: <br />
        Pn-Pt: 10:00 - 18:00 <br />
        Sb: 12:00 - 18:00 <br />
        Ndz: Nieczynne
      </p>
    </div>
    <div class="w-full md:w-2/3">
      <iframe
        src="https://snazzymaps.com/embed/636312"
        width="100%"
        height="400px"
        style="border:none;"
        class="rounded-2xl"
      ></iframe>
    </div>
  </div>
</div>
