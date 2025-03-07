export async function loadMarkdownContent(filePath: string): Promise<string> {
  try {
    // For GitHub Pages deployment, we'll fetch the markdown files from the repository
    // This is a mock implementation for development

    // In production, you would use:
    // const response = await fetch(`https://raw.githubusercontent.com/Sonya-Foundation/sonya.github.io/main/content/${filePath}`);
    // if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);
    // return await response.text();

    if (filePath === "mission.md") {
      return `
# Misyonumuz

Sonya Topluluğu olarak misyonumuz, toplumsal sorunlara sürdürülebilir ve yenilikçi çözümler üreterek, dezavantajlı grupları güçlendirmek ve sosyal adaleti teşvik etmektir. Deprem hazırlığı, kadın hakları, hayvan hakları ve insan hakları gibi kritik alanlarda toplumsal dönüşümü desteklerken, aynı zamanda alternatif ekonomi modelleri ve dijital özgürlük alanlarında öncü çalışmalar gerçekleştiriyoruz. Amacımız, toplumsal eşitlik ve adalet anlayışını güçlendirerek, herkes için daha eşit ve özgür bir geleceğe katkı sağlamaktır.

# Our Mission

As Sonya Community, our mission is to empower disadvantaged groups and promote social justice by producing sustainable and innovative solutions to social problems. While supporting social transformation in critical areas such as disaster preparedness, women's rights, animal rights, and human rights, we also pioneer work in alternative economic models and digital freedom. Our aim is to contribute to a more equal and free future for everyone by strengthening the understanding of social equality and justice.
`
    }

    if (filePath === "vision.md") {
      return `
# Vizyonumuz

Herkes için adil, eşit ve sürdürülebilir bir gelecek inşa etmeyi hedefliyoruz. Bireylerin temel haklarının güvence altına alındığı, doğal afetlere hazırlıklı, ekonomik özerkliğe sahip ve dijital özgürlüğün tam anlamıyla sağlandığı toplumlar oluşturmak için çalışıyoruz. Amacımız, toplumsal eşitlik ve özgürlüğü temel alan bir dünya yaratmak ve tüm bireylerin potansiyelini özgürce gerçekleştirebildiği bir toplum inşa etmektir.

# Our Vision

We aim to build a fair, equal, and sustainable future for everyone. We work to create societies where individuals' fundamental rights are guaranteed, prepared for natural disasters, have economic autonomy, and digital freedom is fully ensured. Our goal is to create a world based on social equality and freedom, and to build a society where all individuals can freely realize their potential.
`
    }

    if (filePath === "values.md") {
      return `
# Değerlerimiz

* **Şeffaflık**: Tüm faaliyetlerimizde hesap verebilirlik ve açıklık
* **Kapsayıcılık**: Farklı görüş ve deneyimlere saygı
* **Sürdürülebilirlik**: Uzun vadeli etki odaklı çalışma
* **Dayanışma**: Toplumsal sorunlara karşı birlikte hareket etme
* **Yenilikçilik**: Yaratıcı ve etkili çözümler geliştirme
* **Özerklik**: Bağımsız düşünce ve eylem özgürlüğünü destekleme

# Our Values

* **Transparency**: Accountability and openness in all our activities
* **Inclusivity**: Respect for different views and experiences
* **Sustainability**: Long-term impact-focused work
* **Solidarity**: Acting together against social problems
* **Innovation**: Developing creative and effective solutions
* **Autonomy**: Supporting independent thought and freedom of action
`
    }

    if (filePath === "organization.md") {
      return `
# Organizasyon Yapımız

\`\`\`
Yönetim Kurulu
├── Genel Sekreterlik
│   ├── İdari İşler Birimi
│   ├── İnsan Kaynakları
│   ├── Finans ve Muhasebe Birimi
│   └── Hukuk Danışmanlığı
│
├── Proje Yönetim Merkezi
│   ├── Afet Hazırlığı Programı
│   ├── Hayvan Hakları Programı
│   ├── İnsan Hakları Programı
│   ├── Alternatif Ekonomi Programı
│   └── Dijital Özgürlük Programı
│
├── İletişim ve Kaynak Geliştirme
│   ├── Kurumsal İletişim
│   ├── Dijital Medya
│   └── Bağışçı İlişkileri
│
├── Açık Kaynak Teknoloji Merkezi
│   ├── Yazılım Geliştirme
│   ├── Veri Bilimleri
│   └── Siber Güvenlik
│
└── Gönüllü Koordinasyon Merkezi
  ├── Gönüllü Eğitim Programları
  ├── Saha Koordinasyonu
  └── Gönüllü Mentorluğu
\`\`\`

# Our Organizational Structure

\`\`\`
Board of Directors
├── General Secretariat
│   ├── Administrative Affairs Unit
│   ├── Human Resources
│   ├── Finance and Accounting Unit
│   └── Legal Consultancy
│
├── Project Management Center
│   ├── Disaster Preparedness Program
│   ├── Animal Rights Program
│   ├── Human Rights Program
│   ├── Alternative Economy Program
│   └── Digital Freedom Program
│
├── Communication and Resource Development
│   ├── Corporate Communication
│   ├── Digital Media
│   └── Donor Relations
│
├── Open Source Technology Center
│   ├── Software Development
│   ├── Data Sciences
│   └── Cyber Security
│
└── Volunteer Coordination Center
  ├── Volunteer Training Programs
  ├── Field Coordination
  └── Volunteer Mentoring
\`\`\`
`
    }

    if (filePath === "projects.md") {
      return `
# Açık Kaynak Projelerimiz

## Lemeye Projesi

Lemeye, Türkiye ve komşu bölgelerdeki kritik olayları gerçek zamanlı olarak izleyen ve görselleştiren gelişmiş bir platformdur. Çeşitli kaynaklardan gelen karmaşık verileri sezgisel, etkileşimli bir harita arayüzüne dönüştürerek, kullanıcıların askeri operasyonları, hastalık salgınlarını, protestoları, insani krizleri ve diğer önemli olayları gerçekleştikleri anda takip etmelerini sağlar.

GitHub Sayfası: github.com/sonyagit/lemeye

### Teknik Özellikler:

* Gerçek zamanlı olay izleme ve filtreleme
* Coğrafi konumlandırma ve haritalama
* Veri analizi ve görselleştirme araçları
* API entegrasyonları
* Çok dilli arayüz desteği

Katkıda Bulunma: Yazılım geliştiriciler, veri bilimcileri ve tasarımcılar projeye katkıda bulunabilir. Katkı rehberi GitHub sayfamızda mevcuttur.

# Our Open Source Projects

## Lemeye Project

Lemeye is an advanced platform that monitors and visualizes critical events in Turkey and neighboring regions in real-time. It transforms complex data from various sources into an intuitive, interactive map interface, allowing users to track military operations, disease outbreaks, protests, humanitarian crises, and other important events as they occur.

GitHub Page: github.com/sonyagit/lemeye

### Technical Features:

* Real-time event monitoring and filtering
* Geographic positioning and mapping
* Data analysis and visualization tools
* API integrations
* Multilingual interface support

Contributing: Software developers, data scientists, and designers can contribute to the project. The contribution guide is available on our GitHub page.
`
    }

    return "Content not found"
  } catch (error) {
    console.error("Error loading markdown content:", error)
    return "Error loading content"
  }
}

