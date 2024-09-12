<script>
  import landing from "$lib/assets/landing.png";
  import { base } from "$app/paths";
</script>

<div
  class="w-full h-screen px-10 bg-secondary-500 sm:bg-cover bg-center bg-no-repeat sm:bg-top bg-[url('/src/lib/assets/landing.png')] font-Akaya"
>
  <div class="flex flex-col items-center justify-center h-full sm:items-start">
    <!-- <img src={landing} alt="" /> -->
    <span class="px-4 text-4xl text-center text-black lg:text-6xl sm:text-white"
      >Zajmiemy <br /> się Twoim <br /> pupilem!</span
    >
    <a
      href="/"
      class="px-4 py-4 mt-4 text-4xl rounded-full lg:text-6xl bg-primary-500 hover:bg-primary-600"
      >Umów się!</a
    >
  </div>
</div>

<div id="offer" class="flex flex-col font-Akaya sm:flex-row bg-tertiary-500">
  <div class="sm:w-1/3">
    <img src="/src/lib/assets/dogs1.png" alt="" class="w-full" />
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
    <img src="/src/lib/assets/dogs2.png" alt="" class="w-full" />
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
    <img src="/src/lib/assets/dogs1.png" alt="" class="w-full" />
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

<div class="px-2 sm:px-16 bg-secondary-500 font-Akaya">
  <div class="py-8">
    <div class="flex flex-col sm:flex-row">
      <img
        src="/src/lib/assets/scissors.png"
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Strzyżenie i stylizacja</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>Małe psy (do 10 kg): 100-150 PLN</li>
          <li>Średnie psy (10-25 kg): 150-200 PLN</li>
          <li>Duże psy (25-40 kg): 200-250 PLN</li>
          <li>Bardzo duże psy (powyżej 40 kg): 250-350 PLN</li>
        </ul>
      </div>
    </div>
  </div>

  <div id="price" class="py-8">
    <div class="flex flex-col sm:flex-row">
      <img
        src="/src/lib/assets/shower.png"
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Kąpiel i pielęgnacja</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>Małe psy: 70-100 PLN</li>
          <li>Średnie psy: 100-130 PLN</li>
          <li>Duże psy: 130-180 PLN</li>
          <li>Bardzo duże psy: 180-250 PLN</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-8">
    <div class="flex flex-col sm:flex-row">
      <img
        src="/src/lib/assets/ear.png"
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Pielęgnacja uszu i oczu</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>Czyszczenie uszu: 20-40 PLN</li>
          <li>Pielęgnacja oczu: 20-40 PLN</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-8">
    <div class="flex flex-col sm:flex-row">
      <img
        src="/src/lib/assets/pawprint.png"
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
  </div>

  <div class="py-8">
    <div class="flex flex-col sm:flex-row">
      <img
        src="/src/lib/assets/add.png"
        alt=""
        class="w-32 mb-4 sm:w-auto sm:h-32"
      />
      <div class="ml-8">
        <h3 class="text-4xl">Usługi dodatkowe</h3>
        <ul class="text-2xl list-disc list-inside">
          <li>
            Rozczesywanie skołtunionej sierści: 50-150 PLN (w zależności od
            wielkości psa i stopnia skołtunienia)
          </li>
          <li>
            Stylizacja i farbowanie sierści: 100-200 PLN (zależnie od zakresu
            usługi)
          </li>
          <li>Pielęgnacja zębów (usuwanie kamienia nazębnego): 100-200 PLN</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="py-8 text-xl">
    Uwaga: Podane ceny są orientacyjne i mogą się różnić w zależności od
    konkretnej rasy psa, jego stanu sierści oraz indywidualnych potrzeb.
    Zachęcamy do kontaktu w celu uzyskania dokładnej wyceny.
  </div>
</div>

<div id="contact" class="px-24 py-8 text-white bg-primary-500 font-Akaya">
  <h1 class="text-8xl">O nas</h1>
  <div class="flex flex-col md:flex-row">
    <img src="/src/lib/assets/about-dog.png" alt="" class="md:h-64 lg:h-96" />
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

<div id="about" class="px-24 py-8 text-white bg-secondary-500 font-Akaya">
  <h1 class="text-8xl">Kontakt</h1>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/3">
      <p class="mb-8 text-3xl">
        Adres: <br />
        ul. Kościuszki 38/1 <br />
        00-000 Poznań <br />
        <br />
        Telefon: <br />
        123 456 789 <br />
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
