const presentation = document.querySelector("#app");
const assetRoot = presentation.dataset.assetRoot;
const printMode = new URLSearchParams(window.location.search).has("print");
const image = (name) => `${assetRoot}/${encodeURIComponent(name)}`;

const slides = [
  {
    title: "Kenali, Jaga, dan Cegah",
    html: `
      <article class="slide slide--two-column">
        <div class="hero-copy">
          <p class="eyebrow">Edukasi kesehatan kulit remaja</p>
          <h1 class="slide-title">Kenali.<br /><strong>Jaga.</strong><br />Cegah.</h1>
          <p class="slide-lead">Belajar mengenali kulit, membangun kebiasaan sehat, dan tahu kapan perlu meminta bantuan.</p>
        </div>
        <div class="hero-art" aria-hidden="true"><img src="${image("Sampul.png")}" alt="Ilustrasi siswa menjaga kesehatan kulit" /></div>
      </article>`,
  },
  {
    title: "Ice breaker",
    html: `
      <article class="slide slide--centered">
        <p class="eyebrow">Mulai dari pertanyaan sederhana</p>
        <h1 class="slide-title slide-title--wide">Kulit itu penting untuk apa?</h1>
        <p class="slide-lead">Pilih jawaban yang menurut kalian paling tepat.</p>
        <div class="quiz-grid">
          <button class="choice quiz-choice" data-correct="false" data-feedback="Kulit memang memengaruhi penampilan, tetapi tugasnya jauh lebih penting dari itu.">A. Hanya untuk penampilan</button>
          <button class="choice quiz-choice" data-correct="true" data-feedback="Benar. Kulit melindungi tubuh, membantu mengatur suhu, dan membuat kita dapat merasakan lingkungan.">B. Melindungi tubuh dan membantu kita merasakan lingkungan</button>
          <button class="choice quiz-choice" data-correct="false" data-feedback="Kulit tidak menggantikan kerja jantung atau organ tubuh lain.">C. Menggantikan kerja organ tubuh lain</button>
          <button class="choice quiz-choice" data-correct="false" data-feedback="Kulit tidak membuat semua kuman hilang, tetapi membantu menjadi pelindung tubuh.">D. Menghilangkan semua kuman</button>
        </div>
        <p class="feedback" aria-live="polite"></p>
      </article>`,
  },
  {
    title: "Kulit kita bekerja setiap hari",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Bab 1 - Mengenal kulit kita</p>
          <h1 class="slide-title slide-title--wide">Kulit bukan sekadar pembungkus tubuh</h1>
          <ul class="fact-list">
            <li class="reveal"><strong>Melindungi</strong> tubuh dari lingkungan dan cedera ringan.</li>
            <li class="reveal"><strong>Menjaga</strong> cairan tubuh agar tidak mudah hilang.</li>
            <li class="reveal"><strong>Mengatur</strong> suhu melalui keringat dan aliran darah.</li>
            <li class="reveal"><strong>Membantu</strong> kita merasakan sentuhan, panas, dingin, dan nyeri.</li>
          </ul>
        </div>
        <figure class="image-frame"><img src="${image("Fungsi Kulit.png")}" alt="Infografik lima fungsi utama kulit" /></figure>
      </article>`,
  },
  {
    title: "Lapisan kulit",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Kenali bagian dasarnya</p>
          <h1 class="slide-title">Kulit punya beberapa lapisan</h1>
          <ul class="fact-list">
            <li class="reveal"><strong>Epidermis:</strong> lapisan paling luar, pelindung pertama tubuh.</li>
            <li class="reveal"><strong>Dermis:</strong> tempat saraf, pembuluh darah, rambut, minyak, dan keringat.</li>
            <li class="reveal"><strong>Hipodermis:</strong> lapisan lebih dalam yang membantu melindungi tubuh.</li>
          </ul>
          <p class="callout reveal">Tidak perlu menghafal semuanya. Yang penting, kita tahu kulit adalah organ yang bekerja aktif setiap hari.</p>
        </div>
        <figure class="image-frame"><img src="${image("Lapisan Kulit.png")}" alt="Ilustrasi lapisan kulit" /></figure>
      </article>`,
  },
  {
    title: "Perubahan saat pubertas",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Perubahan yang umum terjadi</p>
          <h1 class="slide-title">Pubertas dapat mengubah kondisi kulit</h1>
          <p class="slide-lead">Hormon dapat membuat kelenjar minyak dan keringat lebih aktif. Karena itu, wajah dapat terasa lebih berminyak dan jerawat dapat muncul.</p>
          <div class="callout reveal">Jerawat bukan bukti seseorang malas mandi atau "kotor".</div>
          <div class="stacked-cards reveal">
            <article class="info-card"><h3>Minyak alami</h3><p>Kulit wajah dan rambut dapat terasa lebih berminyak.</p></article>
            <article class="info-card"><h3>Keringat</h3><p>Tubuh lebih mudah berkeringat saat aktivitas dan cuaca panas.</p></article>
          </div>
        </div>
        <figure class="image-frame"><img src="${image("Perubahan Saat Pubertas.png")}" alt="Perubahan kulit saat pubertas" /></figure>
      </article>`,
  },
  {
    title: "Jerawat dan dermatitis",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Masalah kulit yang umum</p>
          <h1 class="slide-title">Kenali tanpa menyimpulkan sendiri</h1>
          <div class="stacked-cards">
            <article class="info-card reveal"><h3>Jerawat</h3><p>Terjadi ketika pori tersumbat minyak dan sel kulit mati. Jerawat tidak menular.</p></article>
            <article class="info-card reveal"><h3>Dermatitis</h3><p>Peradangan kulit yang dapat terasa gatal, kering, atau perih. Umumnya tidak menular.</p></article>
          </div>
          <p class="callout reveal">Jangan memencet jerawat, menggaruk ruam, atau memakai krim obat milik orang lain.</p>
        </div>
        <div class="dual-images">
          <img src="${image("Bentuk Dasar Jerawat.png")}" alt="Contoh bentuk dasar jerawat" />
          <img src="${image("Kulit Teriritasi.png")}" alt="Contoh pemicu kulit teriritasi" />
        </div>
      </article>`,
  },
  {
    title: "Masalah yang dapat menular",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Kenali dan cegah penularan</p>
          <h1 class="slide-title">Ada keluhan kulit yang dapat menular</h1>
          <ul class="fact-list">
            <li class="reveal"><strong>Tinea:</strong> infeksi jamur kulit, misalnya di kaki atau bagian tubuh lain.</li>
            <li class="reveal"><strong>Skabies:</strong> terutama menular melalui kontak kulit dekat dan cukup lama.</li>
            <li class="reveal"><strong>Kutu kepala:</strong> paling sering berpindah lewat kontak kepala-ke-kepala.</li>
          </ul>
          <p class="callout reveal">Cegah penyakitnya, bukan jauhi orangnya. Jangan mengejek atau mengucilkan teman.</p>
        </div>
        <div class="dual-images">
          <img src="${image("Cara Skabies Dapat Menular.png")}" alt="Cara skabies dapat menular" />
          <img src="${image("Kutu Kepala dan Ketombe.png")}" alt="Perbedaan kutu kepala dan ketombe" />
        </div>
      </article>`,
  },
  {
    title: "Bisa menular atau tidak",
    html: `
      <article class="slide slide--centered">
        <p class="eyebrow">Kuis cepat</p>
        <h1 class="slide-title slide-title--wide">Bisa menular atau tidak?</h1>
        <p class="slide-lead">Sebelum melihat jawabannya, diskusikan dengan teman di sebelahmu.</p>
        <div class="transmission-grid">
          <article class="condition-card reveal"><strong>Jerawat</strong><span>Masalah pori dan peradangan.</span><span class="status status--no">Tidak menular</span></article>
          <article class="condition-card reveal"><strong>Dermatitis</strong><span>Peradangan kulit dengan banyak kemungkinan pemicu.</span><span class="status status--no">Umumnya tidak</span></article>
          <article class="condition-card reveal"><strong>Tinea</strong><span>Infeksi jamur kulit.</span><span class="status status--yes">Dapat menular</span></article>
          <article class="condition-card reveal"><strong>Skabies</strong><span>Keluhan akibat tungau kulit.</span><span class="status status--yes">Dapat menular</span></article>
          <article class="condition-card reveal"><strong>Kutu kepala</strong><span>Kutu yang hidup di rambut.</span><span class="status status--yes">Dapat menular</span></article>
        </div>
        <p class="callout reveal">Tampilan ruam yang mirip belum tentu mempunyai penyebab yang sama. Jangan mendiagnosis dari gambar.</p>
      </article>`,
  },
  {
    title: "Putus rantai penularan",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Kebiasaan kecil, dampak besar</p>
          <h1 class="slide-title">Kita dapat memutus rantai penularan</h1>
          <ul class="fact-list">
            <li class="reveal">Gunakan handuk, sisir, pakaian, dan barang pribadi sendiri.</li>
            <li class="reveal">Cuci tangan dan jaga pakaian tetap bersih serta kering.</li>
            <li class="reveal">Jika ada keluhan yang mengganggu, beri tahu orang dewasa dan periksa.</li>
          </ul>
          <p class="callout reveal">Tidak semua masalah kulit menular. Jika ragu, jangan menebak sendiri.</p>
        </div>
        <figure class="image-frame"><img src="${image("Putus Rantai Penularan.png")}" alt="Infografik putus rantai penularan" /></figure>
      </article>`,
  },
  {
    title: "Setelah berkeringat",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">PHBS untuk kesehatan kulit</p>
          <h1 class="slide-title">Selesai olahraga, apa yang dilakukan?</h1>
          <div class="scenario reveal"><p class="scenario-label">Skenario</p><p>Raka selesai olahraga. Bajunya sangat berkeringat, tetapi pelajaran berikutnya segera dimulai.</p></div>
          <div class="quiz-grid reveal">
            <button class="choice quiz-choice" data-correct="true" data-feedback="Benar. Keringkan tubuh dan ganti pakaian atau kaus kaki yang basah jika tersedia.">Keringkan tubuh dan ganti pakaian basah</button>
            <button class="choice quiz-choice" data-correct="false" data-feedback="Pewangi tidak menggantikan kebiasaan membersihkan tubuh dan mengganti pakaian yang basah.">Semprot pewangi pada baju yang basah</button>
          </div>
          <p class="feedback" aria-live="polite"></p>
        </div>
        <figure class="image-frame"><img src="${image("Jaga Kulit Tetap Kering&bersih.png")}" alt="Kebiasaan menjaga kulit tetap bersih dan kering" /></figure>
      </article>`,
  },
  {
    title: "Tas siaga olahraga",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Siapkan dari rumah</p>
          <h1 class="slide-title">Bawa perlengkapan pribadi setelah olahraga</h1>
          <ul class="fact-list">
            <li class="reveal">Baju dan pakaian dalam bersih.</li>
            <li class="reveal">Kaus kaki bersih dan kantong pakaian kotor.</li>
            <li class="reveal">Botol minum dan handuk pribadi kecil.</li>
          </ul>
          <p class="callout reveal">Kebiasaan sederhana ini membantu tubuh tetap bersih dan nyaman saat kegiatan sekolah padat.</p>
        </div>
        <figure class="image-frame"><img src="${image("Tas Siaga Setelah Olahraga.png")}" alt="Isi tas siaga setelah olahraga" /></figure>
      </article>`,
  },
  {
    title: "Skincare dasar",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Skincare untuk remaja</p>
          <h1 class="slide-title">Sederhana lebih mudah dijalankan</h1>
          <div class="three-steps">
            <article class="step-card reveal"><span class="step-number">1</span><h3>Bersihkan</h3><p>Cuci wajah dengan lembut, tidak perlu berulang kali atau digosok keras.</p></article>
            <article class="step-card reveal"><span class="step-number">2</span><h3>Lembapkan</h3><p>Pelembap dapat membantu menjaga lapisan pelindung kulit.</p></article>
            <article class="step-card reveal"><span class="step-number">3</span><h3>Lindungi</h3><p>Lindungi kulit dari matahari saat beraktivitas di luar.</p></article>
          </div>
          <p class="callout reveal">Toner, serum, masker, scrub, dan banyak produk aktif bukan kebutuhan dasar siswa SMP.</p>
        </div>
        <figure class="image-frame"><img src="${image("Rutinitas Skincare Dasar.png")}" alt="Tiga langkah skincare dasar" /></figure>
      </article>`,
  },
  {
    title: "Perlindungan dari matahari",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Beraktivitas di luar ruangan</p>
          <h1 class="slide-title">Lindungi kulit dengan lebih dari satu cara</h1>
          <ul class="fact-list">
            <li class="reveal">Cari tempat teduh saat matahari terasa terik.</li>
            <li class="reveal">Gunakan topi dan pakaian yang membantu melindungi kulit.</li>
            <li class="reveal">Jika memakai tabir surya, gunakan sesuai petunjuk pada kemasan.</li>
          </ul>
          <p class="callout reveal">Tabir surya membantu, tetapi bukan satu-satunya perlindungan dari matahari.</p>
        </div>
        <figure class="image-frame"><img src="${image("Perlindungan Berlapis dari Matahari.png")}" alt="Perlindungan berlapis dari matahari" /></figure>
      </article>`,
  },
  {
    title: "Cek KLIK",
    html: `
      <article class="slide slide--two-column">
        <div>
          <p class="eyebrow">Pilih kosmetik dengan bijak</p>
          <h1 class="slide-title">Sebelum mencoba produk, Cek KLIK</h1>
          <div class="stacked-cards">
            <article class="info-card reveal"><h3>Kemasan dan label</h3><p>Pastikan kemasan utuh dan baca kegunaan, cara pakai, serta peringatannya.</p></article>
            <article class="info-card reveal"><h3>Izin edar dan kedaluwarsa</h3><p>Periksa melalui situs resmi BPOM dan jangan gunakan produk yang sudah kedaluwarsa.</p></article>
          </div>
          <p class="callout reveal">Produk yang viral belum tentu dibutuhkan, cocok, atau aman untuk semua orang.</p>
        </div>
        <figure class="image-frame"><img src="${image("Cek KLIK.png")}" alt="Infografik Cek KLIK" /></figure>
      </article>`,
  },
  {
    title: "Produk viral",
    html: `
      <article class="slide slide--centered">
        <p class="eyebrow">Pilih dengan lebih bijak</p>
        <h1 class="slide-title slide-title--wide">"Produk ini menghilangkan jerawat dalam satu malam!"</h1>
        <p class="slide-lead">Ardi melihat produk viral dalam wadah tanpa label lengkap. Apa respons yang paling aman?</p>
        <div class="quiz-grid">
          <button class="choice quiz-choice" data-correct="false" data-feedback="Klaim instan dan informasi yang tidak jelas adalah alasan untuk berhati-hati, bukan langsung mencoba.">Coba dulu karena banyak yang merekomendasikan</button>
          <button class="choice quiz-choice" data-correct="false" data-feedback="Meminjam atau memakai produk orang lain dapat membuat kulit bereaksi dan sulit mengetahui penyebabnya.">Pinjam dari teman sebelum membeli</button>
          <button class="choice quiz-choice" data-correct="true" data-feedback="Benar. Periksa Cek KLIK, pikirkan apakah benar-benar perlu, dan libatkan orang tua atau wali.">Periksa Cek KLIK dan tanyakan kepada orang tua atau wali</button>
          <button class="choice quiz-choice" data-correct="false" data-feedback="Mencampur banyak produk baru dapat meningkatkan risiko iritasi.">Campurkan dengan produk lain agar lebih cepat bekerja</button>
        </div>
        <p class="feedback" aria-live="polite"></p>
      </article>`,
  },
  {
    title: "Kapan harus diperiksa",
    html: `
      <article class="slide slide--centered">
        <p class="eyebrow">Kenali tanda untuk meminta bantuan</p>
        <h1 class="slide-title slide-title--wide">Lampu lalu lintas keluhan kulit</h1>
        <div class="traffic-grid">
          <article class="traffic-card traffic-card--green reveal"><h3><span class="traffic-light"></span> Hijau</h3><ul><li>Keluhan ringan tanpa tanda bahaya</li><li>Rawat dengan lembut</li><li>Amati perubahan</li></ul></article>
          <article class="traffic-card traffic-card--yellow reveal"><h3><span class="traffic-light"></span> Kuning</h3><ul><li>Keluhan menetap atau menyebar</li><li>Gatal mengganggu tidur</li><li>Beri tahu orang dewasa dan periksa</li></ul></article>
          <article class="traffic-card traffic-card--red reveal"><h3><span class="traffic-light"></span> Merah</h3><ul><li>Sesak napas atau bengkak wajah</li><li>Demam dengan ruam, nanah, atau nyeri hebat</li><li>Minta bantuan segera</li></ul></article>
        </div>
        <p class="callout reveal">Jangan mendiagnosis diri sendiri atau teman hanya dari gambar dan video di internet.</p>
      </article>`,
  },
  {
    title: "Ringkasan",
    html: `
      <article class="slide slide--centered">
        <p class="eyebrow">Pesan untuk dibawa pulang</p>
        <h1 class="slide-title slide-title--wide">Kenali, Jaga, Cegah, Periksa</h1>
        <img class="summary-image reveal" src="${image("Poster Ringkasan.png")}" alt="Poster ringkasan kesehatan kulit remaja" />
        <p class="slide-lead reveal">Kulit yang sehat tidak harus sempurna. Yang penting adalah kebiasaan sehat, informasi yang benar, dan keberanian meminta bantuan saat diperlukan.</p>
      </article>`,
  },
];

const stage = document.querySelector("#stage");
const counter = document.querySelector("#slide-counter");
const progress = document.querySelector("#progress-bar");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const fullscreenButton = document.querySelector("#fullscreen-button");
let currentSlide = 0;
let touchStartX = 0;

function renderSlide() {
  const slide = slides[currentSlide];
  stage.innerHTML = slide.html;
  counter.textContent = `${currentSlide + 1} / ${slides.length}`;
  progress.style.width = `${((currentSlide + 1) / slides.length) * 100}%`;
  prevButton.disabled = currentSlide === 0;
  nextButton.innerHTML = currentSlide === slides.length - 1 ? "Ulangi <span aria-hidden=\"true\">&#8635;</span>" : "Berikutnya <span aria-hidden=\"true\">&rarr;</span>";
  bindChoices();
}

function renderPrintDeck() {
  presentation.classList.add("presentation--print");
  stage.innerHTML = slides
    .map((slide) => `<section class="print-page">${slide.html}</section>`)
    .join("");
  counter.textContent = `${slides.length} slide`;
  progress.style.width = "100%";
}

function next() {
  if (currentSlide < slides.length - 1) {
    currentSlide += 1;
    renderSlide();
    return;
  }

  currentSlide = 0;
  renderSlide();
}

function previous() {
  if (currentSlide === 0) return;
  currentSlide -= 1;
  renderSlide();
}

function bindChoices() {
  stage.querySelectorAll(".quiz-choice").forEach((choice) => {
    choice.addEventListener("click", () => {
      const feedback = choice.closest("article").querySelector(".feedback");
      const isCorrect = choice.dataset.correct === "true";
      const choices = choice.parentElement.querySelectorAll(".quiz-choice");

      choices.forEach((item) => {
        item.disabled = true;
        if (item.dataset.correct === "true") item.classList.add("is-correct");
      });

      if (!isCorrect) choice.classList.add("is-wrong");
      feedback.textContent = choice.dataset.feedback;
      feedback.className = `feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
    });
  });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    presentation.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);
fullscreenButton.addEventListener("click", toggleFullscreen);

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
    event.preventDefault();
    next();
  }

  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    previous();
  }

  if (event.key === "Home") {
    currentSlide = 0;
    renderSlide();
  }

  if (event.key === "End") {
    currentSlide = slides.length - 1;
    renderSlide();
  }
});

stage.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

stage.addEventListener("touchend", (event) => {
  const touchEndX = event.changedTouches[0].screenX;
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 60) return;
  if (distance < 0) next();
  if (distance > 0) previous();
}, { passive: true });

document.addEventListener("fullscreenchange", () => {
  fullscreenButton.innerHTML = document.fullscreenElement
    ? "Keluar Layar Penuh"
    : "<span aria-hidden=\"true\">&#9974;</span> Layar Penuh";
});

if (printMode) {
  renderPrintDeck();
} else {
  renderSlide();
}
