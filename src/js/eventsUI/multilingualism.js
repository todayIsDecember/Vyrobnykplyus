/* eslint-disable no-dupe-keys */
import { elements, lan, contact__container } from '../UIElements';

class Language {
  constructor(lan, elements, contact__container) {
    this.elements = elements;
    this.lan = {
      en: lan[0],
      uk: lan[1],
    };
    this.dictionary = {};
    this.contact__container = contact__container;
  }

  changeLanguage() {
    const dic = Language.dictionary();
    Object.values(this.lan).forEach((button) => {
      const id = button.getAttribute('id');
      const lang = localStorage.getItem('lang');
      const img__flag = lang
        ? this.lan[lang].querySelector('img')
        : this.lan.en.querySelector('img');
      img__flag.classList.add('active__flag');
      button.addEventListener('click', () => {
        Object.values(this.lan).forEach((val) => {
          val.querySelector('img').classList.remove('active__flag');
        });
        button.querySelector('img').classList.add('active__flag');
        Object.values(this.elements).forEach((item) => {
          item.forEach((element) => {
            localStorage.setItem('lang', id);
            element.innerHTML = dic[id][element.getAttribute('key')];
          });
        });
      });
    });
    Object.values(this.elements).forEach((item) => {
      item.forEach((element) => {
        element.innerHTML = localStorage.getItem('lang')
          ? dic[localStorage.getItem('lang')][element.getAttribute('key')]
          : dic.en[element.getAttribute('key')];
      });
    });
  }

  static dictionary() {
    return (this.dictionary = {
      en: {
        products: 'Products',
        store: 'Store',
        news: 'News',
        contactUs: 'Contact us',
        about: 'about us',
        new__products: 'new products',
        advantages: 'our advantages',
        company__news: 'company news',
        history: 'history of the company',
        about__page: 'TRADE HOUSE “KRYVYI RIH”',
        history__main: 'history <br> companies',
        kr: 'th <br> krivoy rog',
        tradeMark: 'our <br> trade marks',
        first__adv: 'WE REACT QUICKLY AND SOLVE THE DIFFICULTIES ENCOUNTERED',
        second__adv:
          'WE ARE CONSTANTLY WORKING TO IMPROVE THE QUALITY OF OUR BRANDS PRODUCTS',
        third__adv:
          'WE STRIVE TO WORK SO THAT THE CLIENT WOULD MAKE A CHOICE IN FAVOR OF OUR BRANDS',
        forth__adv: 'WE OFFER NOVELTIES BY ANALYZING CUSTOMER REQUESTS',
        custard: 'custard cakes',
        butter: 'butter cookies',
        cupcake: 'cupcake',
        sweet: 'sweet biscuit',
        corn__stick: 'corn stick',
        oatmeal: 'oatmeal cookies',
        diet: 'diet cookies',
        allProducts: 'all products',
        succesfully__coop: 'successful cooperation',
        nameCard1: 'name 1',
        nameCard2: 'name 2',
        nameCard3: 'name 3',
        nameCard4: 'OPENING A NEW WAREHOUSE',
        nameCard5: 'some title 1',
        descrCard1: 'description 1',
        descrCard2: 'description 2',
        descrCard3: 'description 3',
        descrCard4:
          'Friends! We want to share with you another joyful event in the life of our Company...',
        descrCard5: 'some desc 1',
        home: 'Home',
        sales__department: 'SALES DEPARTMENT:',
        quality__remarks: 'QUALITY REMARKS:',
        footer__number1: 'Tel.: +38 (067) 928 14 42 Ukraine',
        footer__number2: 'Tel.: +38 (067) 631 11 56 Krivoy Rog',
        footer__number3: 'Tel.: +38 (096) 045 30 43 Export',
        social__networks: 'SOCIAL NETWORKS:',
        bagel: 'bagel',
        biscuit: 'biscuit cake',
        cake: 'cake',
        candies: 'candies',
        corn: 'corn rich cookies',
        gingerbread: 'gingerbread products',
        shortbread: 'shortbread and yeast cookies',
        sugar: 'sugar cookies',
        wheat: 'wheat rusk',
        categories: 'categories',
        about__page__pa__1:
          'Marketplace “KRYVYI RIH” sells the products as under its own brand SOYUZ KONDITER.',
        about__page__pa__2:
          'The sales system is managed by its own team which consists with 1 head of sales department, 1 supervisor and 8 sales representatives, of which 3 sales representatives work in the city using the pre-selling system, covering about 400 outlets and 5 sales representatives working outside the city according to the Van selling system, covering more than 700 retail outlets in cities such as Zhovti Vody, Piatykhatky, Nikopol, Novovorontsovka, Vilnohirsk, Sofiivka, Ingulets, Dolynska, Kazanka.',
        about__page__pa__3:
          'The resources of our company allow for the uninterrupted and timely delivery of products using our own transport in the city and beyond.',
        about__page__pa__4:
          'All finished products are stored in a warehouse with a total area of 280 m3, the condition of which corresponds to sanitary and hygienic requirements, in compliance with the temperature regime.',
        leader: 'Leadership',
        export__department: 'Export department',
        regional__managers: 'Regional managers',
        postal_add: 'postal address',
        address: '50079, UKRAINE Kryvyi Rih, st. <br> Cherkasova, 31',
        legal_add: 'legal address',
        reception: 'reception',
        export__departs: 'Export department',
        regional__managers: 'Regional managers',
        general__director: 'GENERAL DIRECTOR',
        contact__name1: 'VYNNYK SERGII',
        contact__desc1: '+38 (067) 530 88 37',
        head__of__sales__uk: 'HEAD OF SALES <br> DEPARTMENT UKRAINE',
        contact__name2: 'SKOVRON ANDRII',
        contact__desc2: '+38 (067) 928 14 42',
        head__of__sales__kr: 'HEAD OF SALES <br> DEPARTMENT KRYVYI RIH',
        contact__name3: 'SIEDOV SERHII',
        contact__desc3: '+38 (067) 631 11 56',
        head__of__export: 'HEAD OF EXPORT DEPARTMENT',
        contact__name4: 'SAVCHUK OKSANA',
        contact__desc4: '+38 (096) 045 30 43',
        regional__manager: 'Regional Manager',
        contact__name5: 'KOZIK MIKHAILO <br> VASILOVICH',
        contact__desc5: `Lviv region <br> Transcarpathian region <br> Rivne region <br> Volinska <br>
          097-720-39-32 <br>
          mkozyk14@gmail.com`,
        contact__name6: 'STOYAN ANNA <br> VOLODIMIRIVNA',
        contact__desc6: `Khmelnitskaya <br>
          Vinnytsia <br>
          Ternopil region <br>
          Zaporizhzhya <br>
          097-492-29-07 <br>
          a.stoyan.79@gmail.com`,
        contact__name7: 'DEREVENETS DMITRO <br> MIKOLAYOVICH',
        contact__desc7: `Dressing <br>
          Nikolaevskaya <br>
          Kirovograd <br>
          region Kherson <br>
          068-102-96-29 <br>
          dderevenets@gmail.com`,
        contact__name8: 'SERGIY VOLODIMIROVICH <br> SADOV',
        contact__desc8: `TD Kryvyi Rih <br>
          Dnipropetrovsk region <br>
          067-631-11-56 <br>
          sedovsv7004@gmail.com`,
        contact__name9: 'ANKUDINOV VOLODYMYR <br> VASILOVICH',
        contact__desc9: `Sumska <br>
          Poltavska <br>
          Cherkasy <br>
          Donetsk <br>
          Luhanska <br>
          Kharkivska <br>
          068-450-24-99 <br>
          ankudinov.vv.84@gmail.com`,
        contact__name10: 'DUDIY IGOR <br> VOLODIMIROVICH',
        contact__desc10: `Ivano-Frankivska <br>
          Chernivetska <br>
          Kyivska <br>
          Zhytomyrska <br>
          066-161-04-67 <br>
          Dydai26@gmail.com`,
        bagel__name1: 'Bagel«Malyutka»',
        bagel__article1:
          'Traditional tea drinking is hard to imagine without crispy, fragrant bagels, the small size of which does not interfere with feeling the full range of flavoring qualities of fragrant bread!',
        caloric__content: 'caloric content of 100g of product',
        proteins: 'Proteins',
        fats: 'Fats',
        carbohydrates: 'Carbohydrates',
        bagel__shelf1: 'Shelf life: 180',
        contains: 'Contains: gluten, dairy and egg products, soya lecithin',
        bagel__energy__value1: 'Energy value: 417g',
        product__info__more: 'more',
        bagel__name2: 'Corn rich bagel«Crunching»',
        bagel__article2:
          'Low-calorie corn bagel can not only quicker satisfy hunger, but also added pleasant crunchy emotions!',
        bagel__energy__value2: 'Energy value: 417.6g',
        biscuit__name1: 'Biscuit-cream corner cake',
        biscuit__articlle1:
          'Biscuit semi-finished products soaked in sugar syrup and smeared with butter cream with the addition of confectionery chocolate glaze are great.',
        biscuit__shelf__life: 'Shelf life: 15',
        biscuit__energy__value1: 'Energy value: 417g',
        biscuit__name2: 'Buscuit corner cake «NUTLET»',
        biscuit__article2:
          'Biscuit cakes soaked in sugar syrup, smeared with butter cream whipped with powdered sugar and sprinkled with roasted peanuts will leave an unforgettable aftertaste.',
        biscuit__energy__value2: 'Energy value: 379.1g',
        biscuit__name3: 'Buscuit corner cake with condensed boiled milk',
        biscuit__article3:
          'Sponge cakes soaked in sugar syrup, smeared with cream from condensed boiled milk, create a wonderful taste harmony.',
        biscuit__energy__value3: 'Energy value: 354.9g',
        butter__name1: 'Cookies «CHEESE LEAVES»',
        butter__article1:
          'The leaf-shaped cookies have a sweet taste, crumbly structure and a cheese aroma that will not leave anyone indifferent!',
        butter__shelf__life: 'Shelf life: 60',
        butter__energy__value1: 'Energy value: 470g',
        butter__name2: 'Cookies «DNEPR KAZKI»',
        butter__article2:
          'Delicate crumbly cookies that just melt in your mouth. Fabulously delicious!',
        butter__energy__value2: 'Energy value: 463g',
        cake__name1: 'Cake «Napoleon»',
        cake__article1:
          'It’s good that there are things in life that unite generations. Cake “Napoleon”, with its shortbread cakes in combination with custard and a surface that is framed with crumbs of semi-finished shortbread – who does not know its unforgettable taste? If it is on the table, it means a holiday at home, joy and fun!',
        cake__shelf__life5: 'Shelf life: 5',
        cake__energy__value1: 'Energy value: 330.9g',
        cake__name2: 'Cake «Napoleon» with cherry',
        cake__article2:
          'We offer a cake with a pleasant cherry flavor. It is smeared with cold-cooked custard with natural cherry filling. Our NAPOLEON cake will make your table festive and delight everyone with its taste!',
        cake__energy__value2: 'Energy value: 294.1g',
        cake__name3: 'Cake «SMETANNIK»',
        cake__article3:
          'This cake is very tender, every bite literally melts in your mouth, and you can hardly stop after trying it once. “Smetannik” is perfect as the main dessert for any holidays, and this cake will help while away the evenings with a cup of tea or coffee, surrounded by family or friends.',
        cake__energy__value3: 'Energy value: 352.4g',
        cake__name4: 'Honey cake «DOMASHNII»',
        cake__article4:
          'For those with a sweet tooth who adore honey, we are pleased to offer you to taste the honey cake made according to the classic recipe.',
        cake__shelf__life10: 'Shelf life: 10',
        cake__energy__value4: 'Energy value: 431.2g',
        cake__name5: 'Honey cake «DOMASHNII» with cherry',
        cake__article5:
          'Delicate honey cakes, soaked in creamy sour cream, with juicy cherries in the form of a filler, create an excellent taste harmony!',
        cake__energy__value5: 'Energy value: 346.7g',
        cake__name6: 'Honey cake DOMASHNII «IRISKA»',
        cake__article6:
          'Incredibly fragrant honey cake layers, in combination with boiled condensed milk cream, will make your evening truly cozy!',
        cake__energy__value6: 'Energy value: 464.9g',
        candies__name1: 'CANDIES APRICCI',
        candies__article1:
          'An amazing delicacy of walnuts and dried apricots under the chocolate glaze will not leave anyone indifferent. These candies are carry an indispensable benefit to the body!',
        shelf__life180: 'Shelf life: 180',
        candies__energy__value: 'Energy value: 360.7g',
        candies__name2: 'CANDIES BRUNI',
        candies__article2:
          'Traditional soft candy with roasted nuts covered in glaze in the best performance of the familiar and favorite taste is a joy for everyone!',
        candies__name3: 'CANDIES MELLORA',
        candies__article3:
          'A sweet flavor of melon and walnut covered with dark glaze is collected in candy. The intertwining of the oriental taste and the taste of walnut, familiar to everyone since childhood, forms a wonderful, unique taste that even experienced sweet-tooths will appreciate!',
        candies__name4: 'CANDIES NEGRITTA',
        candies__article4:
          'Whole dried prunes with walnuts, covered with chocolate glaze. Legendary sweets are well suited as a treat for guests, decorate the festive table and will simply delight lovers of sweets!',
        corn__name1: 'CORN RICH COOKIES',
        corn__article1:
          'Lung and sunny cookies with addition of corn flour, not containing gluten, not only gives pleasure, but also enriches us with useful vitamins and minerals!',
        corn__energy__value1: 'Energy value: 471.6g',
        corn__name2: 'CORN RICH COOKIES«PREMIUM»',
        corn__article2:
          'Pieces of chocolate complement the delicate taste of gentle corn cookies – the constant companion of pleasant tea drinking!',
        corn__energy__value2: 'Energy value: 481.2g',
        corn__stick__name1: 'Corn sticks «Chrunching» with nutella',
        corn__stick__article1:
          'Familiar from childhood, delicious and satisfying corn sticks, and today with an abundance of flavors, like Nutella and Rafaello, which you always need to buy more, because enjoying them is hard to stop!',
        corn__stick__energy__value1: 'Energy value: 490g',
        corn__stick__name2: 'Corn sticks «Chrunching» with rafaello',
        corn__stick__article2:
          'Familiar from childhood, delicious and satisfying corn sticks, and today with an abundance of flavors, like Nutella and Rafaello, which you always need to buy more, because enjoying them is hard to stop!',
        corn__stick__energy__value2: 'Energy value: 490g',
        corn__stick__name3: 'Breakfast cereal with Nutella',
        corn__stick__article3:
          'The new "Cookie Monster" line from "VYROBNYK PLYUS" LLC - Corn dry breakfasts. Corn balls have a great taste and a unique crispness. Try Raffaello-flavored or Nutella-flavored corn balls on the way to school or university, at work, when you don"t have time for a full lunch.',
        corn__stick__energy__value3: 'Energy value: 571.2g',
        corn__stick__name4: 'Breakfast cereal with rafaello',
        corn__stick__energy__value4: 'Energy value: 564.7g',
        cupcake__name1: 'Cupcake «DOMASHNII»',
        cupcake__aticle1:
          'Today this sweet pastry is served with tea and consumed for breakfast, taken on the road and prepared for a special occasion. In addition to a delicate and pleasant aroma, cupcakes also have some useful properties, they are recommended for children who need enhanced nutrition.',
        shelf__life60: 'Shelf life: 60',
        cupcake__energy__value1: 'Energy value: 406.9g',
        cupcake__name2: 'Cupcake «RANKOVYI»',
        cupcake__article2:
          'Incredibly crumbled, delicate cupcake with raisins, decorated with powdered sugar … it is impossible to refuse such a delicacy …',
        cupcake__energy__value2: 'Energy value: 406.9g',
        custard__name1: 'Custard cake «with condensed boiled milk»',
        custard__article1:
          'Airy cream with a large amount of boiled condensed milk in combination with a surface covered with condensed milk and chocolate glaze will delight a sweet tooth with a rich taste.',
        custard__energy__value1: 'Energy value: 394,3g',
        custard__name2: 'Custard cakes «IRISKA»',
        custard__article2:
          'Delicate airy cream of whipped cream and boiled condensed milk goes incredibly well with boiled condensed milk on the surface, and sprinkled with pieces of white chocolate on top. It is the perfect addition to your tea party.',
        custard__energy__value2: 'Energy value: 394,3g',
        custard__name3: 'Custard cakes «PREMIUM»',
        custard__article3:
          'Supporters of the classic Soviet standard butter cream will love a cream based on natural, fresh peasant butter, whipped with powdered sugar and white condensed milk.',
        custard__energy__value3: 'Energy value: 394,3g',
        custard__name4: 'Custard cakes «SMACHNENKE»',
        custard__article4:
          'The combination of black glaze with delicate airy cream and a small amount of white condensed milk will pleasantly surprised all fans of the classic choux pastry.',
        custard__energy__value4: 'Energy value: 394,3g',
        gin__name1:
          'Gingerbread products «BATONCHIK» with filler and banana flavor',
        gin__article1:
          'What could be better than fresh, fragrant gingerbread with added fruit. Tasty, healthy, nice!',
        gin__energy__value1: 'Energy value: 366.9g',
        gin__name2: 'Gingerbread products «RYZHYK» with raspberry flavor',
        gin__article2:
          'What could be better than fresh, fragrant gingerbread with added fruit. Tasty, healthy, nice!',
        gin__energy__value2: 'Energy value: 320g',
        gin__name3: 'Gingerbread products «Chocolate taste»',
        gin__article3:
          'The main place on the festive table has always been occupied by His Majesty Gingerbread – whose taste variety was limitless. Because of that the chocolate flavor of the gingerbread is so liked by many generations!',
        shelf__life45: 'Shelf life: 45',
        gin__energy__value3: 'Energy value: 370.2g',
        gin__name4: 'Gingerbread products «DNESTROVSKIY»',
        gin__article4:
          'Gingerbread is an old delicacy, the recipe of which is lost in the age-old traditions. And today, the gingerbread is considered a national symbol, the embodiment of generosity, kindness, spiritual purity and health!',
        gin__energy__value4: 'Energy value: 375.8g',
        oatmeal__name1: 'OATMEAL COOKIES «CLASSIC»',
        oatmeal__article1:
          'Traditional cookies, which are made according to the classic recipe from natural ingredients, providing not only high biological value of the product, but also guaranteeing a unique taste to which we are used to since childhood!',
        oatmeal__energy__value1: 'Energy value: 444.4g',
        oatmeal__name2: 'OATMEAL COOKIES «ELITE»',
        oatmeal__article2:
          'Favorite oatmeal cookies become even tastier with the addition of chocolate pieces, giving the familiar taste to unique sweet notes!',
        oatmeal__energy__value2: 'Energy value: 447.5g',
        oatmeal__name3: 'OATMEAL COOKIES «with cereals»',
        oatmeal__article3:
          'Roasted peanuts and flax seeds make traditional oatmeal cookies more tastier, healthier and enjoyable!',
        oatmeak__energy__value3: 'Energy value: 445.3g',
        oatmeal__name4: 'OATMEAL COOKIES «with cereals»',
        oatmeal__article4:
          'Roasted peanuts and flax seeds make traditional oatmeal cookies more tastier, healthier and enjoyable!',
        oatmeal__energy__value4: 'Energy value: 445.3g',
        oatmeal__name5: 'MINI OATMEAL cookies',
        oatmeal__article5:
          'Meet the New from "Cookie Monster"! Oatmeal cookies are often offered to the child along with a mug of cocoa or milk. By eating a MINI cookie during breakfast, you can get a supply of energy for a long time. In addition, the cookies are very mini in size, which is also sure to appeal to children. Also try MINI ELITE with chocolate crumbs.',
        oatmeal__energy__value5: 'Energy value: 431g',
        short__name1: 'Cookies «LASUNCHIK apple&cinnamon»',
        short__article1:
          'A green apple with sourness and subtle notes of cinnamon will give your beloved cookies a unique taste, and tea drinking with it can be endlessly enjoyable!',
        short__energy__value1: 'Energy value: 424.9g',
        short__name2: 'Cookies «LASUNCHIK cherry»',
        short__article2:
          'Cherry is a delicious juicy berry, with its help a huge amount of various pastries is created. One of the good example is our product. You can verify this only by tasting them!',
        short__energy__value2: 'Energy value: 424.4g',
        short__name3: 'Cookies «LASUNCHIK CITRUS»',
        short__article3:
          'Subtle notes of sourness give your favorite cookies a unique taste, and tea with it can be infinitely pleasant!',
        short__energy__value3: 'Energy value: 424.4g',
        sugar__name1: 'Cookies «DNISTROVSKE»',
        sugar__article1:
          'Cookies «DNISTROVSKE» is a very tasty, go well with tea or coffee and they are eaten very quickly.',
        sugar__energy__value1: 'Energy value: 416g',
        sugar__name2: 'Cookies «RETRO»',
        sugar__article2:
          'An invariable and tasty memory from childhood, its pleasant sweet taste is liked by both the older and younger generations.',
        sugar__energy__value2: 'Energy value: 423g',
        sweet__name1: 'KORZHYK «DYTIACHYI» Pink,White',
        sweet__article1:
          'Remember how delicious tortillas were in our childhood? If you want to remember this taste and find yourself in childhood for a moment, then you should definitely try them!',
        sweet__energy__value1: 'Energy value: 529.8g',
        sweet__name2: 'KORZHYK «DYTIACHYI» White',
        sweet__article2:
          'Remember how delicious tortillas were in our childhood? If you want to remember this taste and find yourself in childhood for a moment, then you should definitely try them!',
        sweet__energy__value2: 'Energy value: 529,8g',
        sweet__name3: 'KORZHYK «SHKILNYI»',
        sweet__article3:
          'Those who grew up in the Soviet Union remember these delicious cakes in school canteens. For those who were born later, we strongly recommend getting to know this wonderful pastry.',
        sweet__energy__value3: 'Energy value: 531,8g',
        sweet__name4: 'KORZHYK «STUDENSKYI»',
        sweet__article4:
          'Another favorite GOST. Another delicious treat for a hearty tea party.',
        sweet__energy__value4: 'Energy value: 531.6g',
        wheat__name1: 'Wheat rusk «Stolychni» with raisins',
        wheat__article1:
          'Nowadays, a large variety of flavoring ingredients and additives are presented on the market, but raisins are classics. Rusk with raisins contains selected specimens of the highest grade and the best quality, and their uniform spreading provides a special taste of the finished product!',
        wheat__energy__value1: 'Energy value: 394,3g',
        diet_name1: 'OATMEAL COOKIES with fructose',
        diet_desc1:
          'People who cannot tolerate sugar also want to enjoy something sweet at least occasionally. TM "SOYUZ KONDITER" offers sweets with fructose, oatmeal and corn cookies, tasty and not harmful to health.',
        diet__energy__value1: 'Energy value: 424.8g',
        diet_name2: 'CORN COOKIES with fructose',
        diet__energy__value2: 'Energy value: 518,4g',
        read__more: 'read more',
        here: 'here',
        history__pa__header1: 'Production of confectionery products',
        history__pa__header2: 'Benefits',
        history__pa__header3: 'Product quality',
        history__pa__header4: 'Export',
        history__pa__header5: 'Cooperation',
        history__pa1: `VYROBNYK PLYUS LTD is the one of the leaders in production of oatmeal, cornmeal cookies, bagels and rusks throughout Ukraine over the past 15 years. We make our products with zeal and soul, believing that even the best product can be made much better! We do what we love, and boldly share our success with the whole world.
        <br>
        Our company has a well-developed distribution network throughout Ukraine. The sales structure sells products under its own trademarks “SOYUZ KONDITER” and “TASMAN” in the amount of more than 400 tons per month.`,
        history__pa2:
          'The most important thing for us is concern for the welfare of our customers, the safety and quality of our confectionery products. Using only high-quality, environmentally friendly raw materials, we produce products of the highest quality.',
        history__pa3: `High quality products are provided by new technologies and modern equipment, high-quality ingredients and quality control, which cover the entire production – from raw materials to the time of delivery of the product to the customer.
        <br>
        Confirmation of this is the certificate for the food safety management system in accordance with DSTU ISO 22000, which was received by the enterprise.
        <br>
        This system covers the food chain from production to consumption of the food product of the final consumer.`,
        history__pa4: `In addition to the Ukrainian market, our products are presented in markets on other countries of the world. The company is actively developing its export potential, mainly in the countries of the European Union, North America, and Central Asia. The products of our brands are represented in Germany, Greece, Romania, Bulgaria, Hungary, Lithuania, Latvia, Estonia, Georgia, Azerbaijan, Israel, Canada, etc.
        <br>
        VYROBNYK PLYUS LTD is carried out export shipments of more than 100 tons of confectionery products in the month.`,
        history__pa5: `In working with our customers, the company is always guided by the interests of our partners and is able to find compromises.
        <br>
        We are sure that in our person you will find a reliable and professional partner.
        <br>
        Regularity in the supply of products and a flexible system of discounts, flawless fulfillment of orders, individual work with customers will allows us to build a long-term relationships.`,
        news_1_title: 'Opening of a new warehouse',
        news_2_title: 'New line of packaged products "Cookie Monster"',
        news_3_title:
          '"VYROBNYK PLYUS" changes the logo of TM "SOYUZ KONDITER"',
        news_4_title: 'We are constantly developing',
        news_1_article:
          'Friends! We would like to share with you another joyful event in the life of our Company. Our warehouse in the city of Kryvyi Rih has moved to a new address, now we are located on the street S. Tilgi 34v. Such changes have a positive effect on the work of our team and inspire the use of new opportunities.',
        news_2_article:
          '"Cookie Monster" is not just a new product line aimed at a larger number of consumers, including children, it is a new member of our team. "Cookie Monster" is an expert in provocative ideas. Which inspired our team to new achievements, gave a new breath. The advantages are a new packaging design, a quality product, reduced packaging weight, an affordable price on the shelf, a long shelf life and more. Expect something new soon, something bold, unconventional, informal. .. Something tasty. The first novelties are already on sale.',
        news_3_article:
          'The new logo preserves the outlines of the previous versions of the logos. By making changes (and the logo is just the beginning), the company aims to strengthen its brand, making it more relevant and in line with global standards, increase the loyalty of existing consumers and attract a new audience. Gradually, the new logo will be introduced on transport containers and packaging, changes will be made in corporate documentation, advertising materials, etc. We hope that you will like these changes!',
        news_4_article:
          'Recently, the company purchased new, modern equipment - a horizontal packaging machine. The specified equipment automated the process of packaged products, thereby increasing the volume of our production, while the unsurpassed quality remained unchanged.',
      },
      uk: {
        products: 'Продукція',
        store: 'Крамниця',
        news: 'Новини',
        contactUs: 'Контакти',
        about: 'про нас',
        new__products: 'нова продукція',
        advantages: 'наші переваги',
        company__news: 'новини компанії',
        history: 'історія компанії',
        about__page: 'торговий дім "кривий ріг"',
        history__main: 'історія <br> компанії',
        kr: 'тд <br> кривий ріг',
        tradeMark: 'наші <br> торгові марки',
        first__adv: 'ШВИДКО РЕАГУЄМО І ВИРІШУЄМО ВИНИКШІ ТРУДНОЩІ',
        second__adv:
          'ПОСТІЙНО ПРАЦЮЄМО НАД ПІДВИЩЕННЯМ ЯКОСТІ ПРОДУКЦІЇ НАШИХ ТОРГОВИХ МАРОК',
        third__adv:
          'ПРАГНЕМО ПРАЦЮВАТИ ТАК, ЩОБ КЛІЄНТ РОБИВ ВИБІР НА КОРИСТЬ НАШИХ ТОРГОВИХ МАРОК',
        forth__adv: 'ПРОПОНУЄМО НОВИНКИ, ПРОАНАЛІЗУВАВШИ ЗАПИТИ КЛІЄНТІВ',
        custard: 'заварні тістечка',
        butter: 'здобне печиво',
        cupcake: 'кекси',
        sweet: 'коржик',
        corn__stick: 'кукурудзяні палички',
        oatmeal: 'печиво вівсяне',
        diet: 'дієтичне печиво',
        allProducts: 'усі продукти',
        succesfully__coop: 'УСПІШНЕ СПІВРОБІТНИЦТВО',
        nameCard1: 'ім"я 1',
        nameCard2: 'ім"я 2',
        nameCard3: 'ім"я 3',
        nameCard4: 'ВІДКРИТТЯ НОВОГО СКЛАДУ',
        nameCard5: 'хедер 1',
        descrCard1: 'опис 1',
        descrCard2: 'опис 2',
        descrCard3: 'опис 3',
        descrCard4:
          'Друзі! Хочемо поділитися з Вами черговою радісною подією в житті нашої Компанії...',
        descrCard5: 'опис 1',
        home: 'головна',
        sales__department: 'Відділ збуту:',
        quality__remarks: 'Відділ якості:',
        footer__number1: 'Tel.: +38 (067) 928 14 42  Україна',
        footer__number2: 'Tel.: +38 (067) 631 11 56  Кривий Ріг',
        footer__number3: 'Tel.: +38 (096) 045 30 43  Експорт',
        social__networks: 'Соціальні мережі:',
        bagel: 'сушка',
        biscuit: 'уголок бісквітний',
        cake: 'торти',
        candies: 'цукерки',
        corn: 'печиво здобне кукурудзяне',
        gingerbread: 'пряникові вироби',
        shortbread: 'пісочно-дріжджове печиво',
        sugar: 'цукрове печиво',
        wheat: 'сухарі здобні пшеничні',
        categories: 'категорії',
        about__page__pa__1:
          'ТД «КРИВИЙ РІГ» реалізує продукцію під власною ТМ SOYUZ KONDITER.',
        about__page__pa__2:
          'Управління системою продажів здійснюється власною командою, що складається з 1 керівника, 1 супервайзера і 8 торгових представників,  з яких 3 ТП працюють по місту за системою преселлінг, покриваючи близько 400 торгових точок та 5 ТП, що  працюють за межами міста по системі венселлінг,  покриваючи більше ніж 700 торгових точок у таких містах  як Жовті води, П’ятихатки, Нікополь, Нововоронцівка, Вольногорськ, Софіївка, Інгулець, Долинська, Казанка.',
        about__page__pa__3:
          'Ресурси нашої компанії дозволяють  здійснювати безперебійну та своєчасну доставку продукції по місту та за її межами, власним транспортом. Вся готова продукція зберігається на складі загальної площі 280 м3, стан якого  відповідає  санітарно-гігієнічним вимогам, з дотриманням температурного режиму',
        about__page__pa__4: '',
        leader: 'Керівництво',
        export__department: 'Відділ експорту',
        regional__managers: 'Регіональні менеджери',
        postal_add: 'поштова адреса',
        address: '50079, УКРАЇНА м.Кривий Ріг, <br> вул. Черкасова, 31',
        legal_add: 'юридична адреса',
        reception: 'приймальня',
        export__departs: 'відділ експорту',
        regional__managers: 'регіональні менеджери',
        general__director: 'ДИРЕКТОР',
        contact__name1: 'ВИННИК СЕРГІЙ <br> ОЛЕКСІЙОВИЧ',
        contact__desc1: '+38 (067) 530 88 37',
        head__of__sales__uk: 'КЕРІВНИК ВІДДІЛУ <br> ПРОДАЖУ ЗБУТ УКРАЇНА',
        contact__name2: 'СКОВРОН АНДРІЙ <br> ГРИГОРОВИЧ',
        contact__desc2: '+38 (067) 928 14 42',
        head__of__sales__kr: 'КЕРІВНИК ВІДДІЛУ <br> ПРОДАЖУ ТД КРИВИЙ РІГ',
        contact__name3: 'СЄДОВ СЕРГІЙ <br> ВІКТОРОВИЧ',
        contact__desc3: '+38 (067) 631 11 56',
        head__of__export: 'КЕРІВНИК ВІДДІЛУ ПРОДАЖУ ЗЕД',
        contact__name4: 'САВЧУК ОКСАНА АНАТОЛІЇВНА',
        contact__desc4: '+38 (096) 045 30 43',
        regional__manager: 'Регіональний Менеджер',
        contact__name5: 'КОЗИК МИХАЙЛО <br> ВАСИЛЬОВИЧ',
        contact__desc5: `Львівська <br>
          Закарпатська <br>
          Рівненська <br>
          Волинська <br>
          097-720-39-32 <br>
          mkozyk14@gmail.com`,
        contact__name6: 'СТОЯН АННА <br> ВОЛОДИМИРІВНА',
        contact__desc6: `Хмельницька <br>
          Вінницька <br>
          Тернопільська <br>
          Запорізька <br>
          097-492-29-07 <br>
          a.stoyan.79@gmail.com`,
        contact__name7: 'ДЕРЕВЕНЕЦЬ ДМИТРО <br> МИКОЛАЙОВИЧ',
        contact__desc7: `Одеська <br>
          Миколаївська <br>
          Кіровоградська <br>
          Херсонська <br>
          068-102-96-29 <br>
          dderevenets@gmail.com`,
        contact__name8: 'СЄДОВ СЕРГІЙ <br> ВОЛОДИМИРОВИЧ',
        contact__desc8: `ТД Кривий Ріг <br>
          Дніпропетровська <br>
          067-631-11-56 <br>
          sedovsv7004@gmail.com`,
        contact__name9: 'АНКУДІНОВ ВОЛОДИМИР <br> ВАСИЛЬОВИЧ',
        contact__desc9: `Сумська <br>
          Полтавська <br>
          Черкаська <br>
          Донецька <br>
          Луганська <br>
          Харківська <br>
          068-450-24-99 <br>
          ankudinov.vv.84@gmail.com`,
        contact__name10: 'ДУДІЙ ІГОР <br> ВОЛОДИМИРОВИЧ',
        contact__desc10: `Івано-Франківська <br>
          Чернівецька <br>
          Київська <br>
          Житомирська <br>
          066-161-04-67 <br>
          Dydai26@gmail.com`,
        bagel__name1: 'СУШКА «МАЛЮТКА»',
        bagel__article1:
          'Традиційне чаювання важко уявити без хрусткої ароматної сушки, невеликий розмір якої не заважає відчути весь спектр смакових якостей запашного хліба!',
        caloric__content: 'калорійність на 100г продукту',
        proteins: 'Білки',
        fats: 'Жири',
        carbohydrates: 'Вуглеводи',
        bagel__shelf1: 'Термін придатності : 180 днів',
        contains: 'Містить: глютен, молочні та яєчні продукти, соєвий лецитин',
        bagel__energy__value1: 'Енергетична цінність : 417г',
        product__info__more: 'більше',
        bagel__name2: 'СУШКА «ХРУСТЯЩА»',
        bagel__article2:
          'Низькокалорійна кукурудзяна сушка здатна не тільки швидко втамувати голод, але й додати приємних хрустких емоцій!',
        bagel__energy__value2: 'Енергетична цінність : 417,6г',
        biscuit__name1: 'УГОЛОК БІСКВІТНО-КРЕМОВИЙ',
        biscuit__articlle1:
          'Бісквітні напівфабрикати, просочені цукровим сиропом та перемазані масляним кремом з додаванням кондитерської шоколадної глазурі, чудово смакують.',
        biscuit__shelf__life: 'Термін придатності : 15 днів',
        biscuit__energy__value1: 'Енергетична цінність : 417г',
        biscuit__name2: 'БІСКВІТНИЙ УГОЛОК «ГОРІШОК»',
        biscuit__article2:
          'Просочені цукровим сиропом бісквітні коржі, перемазані масляним кремом збитим із цукровою пудрою та зверху посипані подробленим смаженим арахісом, залишать незабутній після смак.',
        biscuit__energy__value2: 'Енергетична цінність : 379,1г',
        biscuit__name3: 'БІСКВІТНИЙ УГОЛОК зі згущеним увареним молоком',
        biscuit__article3:
          'Просочені цукровим сиропом бісквітні коржі, перемазані кремом із згущеного увареного молока, створюють чудову смакову гармонію.',
        biscuit__energy__value3: 'Енергетична цінність : 354,9г',
        butter__name1: 'ПЕЧИВО «ЛИСТОЧКИ СИРНІ»',
        butter__article1:
          'Печиво у формі листочків має здобний смак, розсипчасту структуру та сирний аромат, що не залишить байдужим нікого!',
        butter__shelf__life: 'Термін придатності : 60 днів',
        butter__energy__value1: 'Енергетична цінність : 470г',
        butter__name2: 'ПЕЧИВО «ЧАЙКИ ДНІПРА»',
        butter__article2:
          'Ніжне розсипчасте пісочне печиво, що просто тане в роті. Казково смачне!',
        butter__energy__value2: 'Енергетична цінність : 463г',
        cake__name1: 'ТОРТ «НАПОЛЕОН»',
        cake__article1:
          'Добре, що в житті є речі, які об’єднують покоління. Торт «Наполеон», з його пісочними коржами в поєднанні із заварним кремом та поверхнею, котра оформлена крихтами пісочного полуфабриката – хто не знає його незабутнього смаку? Якщо він на столі, значить вдома свято, радість та веселощі!',
        cake__shelf__life5: 'Термін придатності : 5 днів',
        cake__energy__value1: 'Енергетична цінність : 330,9г',
        cake__name2: 'ТОРТ «НАПОЛЕОН» з вишнею',
        cake__article2:
          'Пропонуємо торт з приємною вишневою ноткою. Його пісочні коржі змащені заварним кремом холодного приготування з додаванням наповнювача на основі натуральної вишні. Наш торт «НАПОЛЕОН» зробить Ваш стіл святковим та порадує усіх своїм смаком',
        cake__energy__value2: 'Енергетична цінність : 294,1г',
        cake__name3: 'ТОРТ «СМЕТАННІК»',
        cake__article3:
          'Це торт дуже ніжний, кожен шматочок буквально тане в роті, і ви навряд чи зможете зупинитися, спробувавши його одного разу. «Сметанник» відмінно підходить в якості головного десерту на будь-які свята, а також цей торт допоможе скоротати вечора за чашкою чаю або кави в оточенні рідних або друзів.',
        cake__energy__value3: 'Енергетична цінність : 352,4г',
        cake__name4: 'ТОРТ МЕДОВИЙ «ДОМАШНІЙ»',
        cake__article4:
          'Ласунам, що обожнюють мед, із задоволенням пропонуємо скуштувати медовий торт, виготовлений за класичним рецептом.',
        cake__shelf__life10: 'Термін придатності : 10 днів',
        cake__energy__value4: 'Енергетична цінність : 431,2г',
        cake__name5: 'ТОРТ МЕДОВИЙ «ДОМАШНІЙ» з вишнею',
        cake__article5:
          'Ніжні медові коржі, просочені вершково-сметанним кремом, в поєднанні з соковитою вишнею у вигляді наповнювача, створюють чудову смакову гармонію',
        cake__energy__value5: 'Енергетична цінність : 346,7г',
        cake__name6: 'ТОРТ МЕДОВИЙ ДОМАШНІЙ «ІРИСКА»',
        cake__article6:
          'Неймовірно ароматні медові коржі торту, в поєднанні з кремом із увареного згущеного молока, зроблять Ваш вечір по-справжньому затишним',
        cake__energy__value6: 'Енергетична цінність : 464,9г',
        candies__name1: 'ЦУКЕРКИ APRICCI',
        candies__article1:
          'Дивовижні ласощі під шоколадною глазур’ю з волоських горіхів і кураги нікого не залишать байдужим. Ці цукерки не тільки нічим не поступаються вишуканим десертам з коробки, але й несуть незамінний запас користі для організму.',
        shelf__life180: 'Термін придатності : 180 днів',
        candies__energy__value: 'Енергетична цінність : 360,7г',
        candies__name2: 'ЦУКЕРКИ BRUNI',
        candies__article2:
          'Традиційна м’яка цукерка зі смаженим горіхом в глазурі в найкращому виконанні знайомого і улюбленого смаку – це радість для кожного!',
        candies__name3: 'ЦУКЕРКИ MELLORA',
        candies__article3:
          'У цукерці зібрано солодкий букет дині і волоського горіха, вкритих чорним шоколадом. Сплетіння східного смаку далекої жаркої країни і знайомого кожному з дитинства корисного волоського горіха утворює чудовий, неповторний смак, який оцінять навіть досвідчені ласуни!',
        candies__name4: 'ЦУКЕРКИ NEGRITTA',
        candies__article4:
          'Цільний в’ялений чорнослив з волоським горіхом, вкритий кондитерською глазур’ю. Легендарні цукерки добре підійдуть як частування для гостей, прикрасять святковий стіл і просто порадують любителів солодощів!',
        corn__name1: 'ПЕЧИВО ЗДОБНЕ КУКУРУДЗЯНЕ',
        corn__article1:
          'Легке та сонячне печиво з додаванням кукурудзяного борошна, що не містить глютену, не тільки приносить задоволення, але й збагачує нас найкориснішими вітамінами!',
        corn__energy__value1: 'Енергетична цінність : 471,6г',
        corn__name2: 'ПЕЧИВО ЗДОБНЕ КУКУРУДЗЯНЕ «ПРЕМІУМ»',
        corn__article2:
          'Шматочки натурального шоколаду доповнюють тонкий смак ніжного кукурудзяного печива – незмінного супутника приємних чаювань!',
        corn__energy__value2: 'Енергетична цінність : 481,2г',
        corn__stick__name1: 'КУКУРУДЗЯНА ПАЛИЧКА «ХРУСТЯШКА» із Nutella',
        corn__stick__article1:
          'Знайомі з дитинства смачні та ситні кукурудзяні палички, а сьогодні з нутеллою та рафаелло, яких завжди потрібно брати більше, адже смакуючи їх важко спинитися!',
        corn__stick__energy__value1: 'Енергетична цінність : 490г',
        corn__stick__name2: 'КУКУРУДЗЯНА ПАЛИЧКА «ХРУСТЯШКА» із rafaello',
        corn__stick__article2:
          'Знайомі з дитинства смачні та ситні кукурудзяні палички, а сьогодні з нутеллою та рафаелло, яких завжди потрібно брати більше, адже смакуючи їх важко спинитися!',
        corn__stick__energy__value2: 'Енергетична цінність : 490г',
        corn__stick__name3: 'СУХИЙ СНІДАНОК із Nutella',
        corn__stick__article3:
          'Нова лінійка «Cookie Monster» від ТОВ «ВИРОБНИК ПЛЮС» - Кукурудзяні сухі сніданки. Кукурудзяні кульки це – чудовий смак та неповторна хрусткість. Спробуйте кукурудзяні кульки  з ароматом рафаелло або ароматом нутелли по дорозі до школи або університету, на роботі, коли у вас немає часу на повноцінний обід.',
        corn__stick__energy__value3: 'Енергетична цінність: 571.2g',
        corn__stick__name4: 'СУХИЙ СНІДАНОК із rafaello',
        corn__stick__energy__value4: 'Енергетична цінність: 564.7g',
        cupcake__name1: 'КЕКС «ДОМАШНІЙ»',
        cupcake__aticle1:
          'Цю солодку випічку сьогодні подають до чаю та споживають на сніданок, беруть в дорогу і готують з приводу особливої нагоди. Крім ніжного і приємного аромату, кекси мають і деякі корисні властивості, зокрема їх рекомендують дітям, яким необхідно посилене харчування.',
        shelf__life60: 'Термін придатності : 60 днів',
        cupcake__energy__value1: 'Енергетична цінність : 406,9г',
        cupcake__name2: 'КЕКС «РАНКОВИЙ»',
        cupcake__article2:
          'Повітряний крем з великою кількістю увареного згущеного молока в поєднанні з покритою згущеним молоком і шоколадною глазур’ю поверхнею, порадують ласунів насиченим смаком.',
        cupcake__energy__value2: 'Енергетична цінність : 406,9г',
        custard__name1: 'ТІСТЕЧКО «ЗАВАРНЕ ЗІ ЗГУЩЕНИМ УВАРЕНИМ МОЛОКОМ»',
        custard__article1:
          'Повітряний крем з великою кількістю увареного згущеного молока в поєднанні з покритою згущеним молоком і шоколадною глазур’ю поверхнею, порадують ласунів насиченим смаком.',
        custard__energy__value1: 'Енергетична цінність: 394,3г',
        custard__name2: 'ТІСТЕЧКО ЗАВАРНЕ «ІРИСКА»',
        custard__article2:
          'Ніжний повітряний крем зі збитих вершків та увареного згущеного молока неймовірно добре поєднується з увареним згущеним молоком на поверхні, та посипаними зверху осколками білого шоколаду. Це є чудове доповнення до Вашого чаювання.',
        custard__energy__value2: 'Енергетична цінність: 394,3г',
        custard__name3: 'ТІСТЕЧКО ЗАВАРНЕ «ПРЕМІУМ»',
        custard__article3:
          'Прихильники класичного масляного крему радянського стандарту вподобають крем на основі натурального, свіжого селянського масла, збитого з цукровою пудрою і білим згущеним молоком.',
        custard__energy__value3: 'Енергетична цінність: 394,3г',
        custard__name4: 'ТІСТЕЧКО ЗАВАРНЕ «СМАЧНЕНЬКЕ»',
        custard__article4:
          'Поєднання чорної глазурі з ніжним повітряним кремом та невеликої кількості білого згущеного молока, приємно здивує усіх прихильників класичного заварного тістечка.',
        custard__energy__value4: 'Енергетична цінність: 394,3г',
        gin__name1:
          'ПРЯНИКОВИЙ ВИРІБ «БАТОНЧИК» з наповнювачем і ароматом банану',
        gin__article1:
          'Що може бути краще, ніж свіжий запашний пряник з додаванням фруктів. Смачно, корисно, приємно!',
        gin__energy__value1: 'Енергетична цінність : 366,9г',
        gin__name2: 'ПРЯНИКОВИЙ ВИРІБ «РИЖИК» з ароматом малини',
        gin__article2:
          'Що може бути краще, ніж свіжий запашний пряник з додаванням фруктів. Смачно, корисно, приємно!',
        gin__energy__value2: 'Енергетична цінність : 320г',
        gin__name3: 'ПРЯНИКОВІ ВИРОБИ «ШОКОЛАДНИЙ СМАК»',
        gin__article3:
          'Головне місце на святковому столі завжди займав його Величність Пряник – смакова різноманітність якого була безмежною. Саме тому шоколадний смак пряника так припав до вподоби багатьом поколінням!',
        shelf__life45: 'Термін придатності : 45 днів',
        gin__energy__value3: 'Енергетична цінність : 370,2г',
        gin__name4: 'ПРЯНИКОВІ ВИРОБИ «ДНІСТРОВСЬКІ»',
        gin__article4:
          'Пряники – старовинні ласощі, рецептура виготовлення яких втрачається в вікових традиціях. І сьогодні пряник вважається народним символом, втіленням щедрості, добра, душевної чистоти і здоров’я!',
        gin__energy__value4: 'Енергетична цінність : 375,8г',
        oatmeal__name1: 'ПЕЧИВО ВІВСЯНЕ «КЛАСИЧНЕ»',
        oatmeal__article1:
          'Традиційне печиво, виготовлене за класичною рецептурою з натуральних інгредієнтів, які забезпечують не тільки високу біологічну цінність продукту, а й гарантують неповторний смак, до якого ми звикли з дитинства.',
        oatmeal__energy__value1: 'Енергетична цінність : 444.4г',
        oatmeal__name2: 'ПЕЧИВО ВІВСЯНЕ «ЕЛІТНЕ»',
        oatmeal__article2:
          'Улюблене вівсяне печиво стає ще смачнішим з додаванням шматочків справжнього шоколаду, що надають знайомому смаку неповторних солодких ноток!',
        oatmeal__energy__value2: 'Енергетична цінність : 447,5г',
        oatmeal__name3: 'ПЕЧИВО ВІВСЯНЕ «ЗЛАКИ»',
        oatmeal__article3:
          'Смажені ядра арахісу та зернятка льону роблять традиційне вівсяне печиво ще смачнішим, кориснішим та бажанішим!',
        oatmeak__energy__value3: 'Енергетична цінність : 445,3г',
        oatmeal__name4: 'ПЕЧИВО ВІВСЯНЕ з кунжутом',
        oatmeal__article4:
          'Ніжне хрустке та неповторно смачне печиво з кунжутом так добре смакує до сніданку в поєднанні з ароматним чаєм чи молоком!',
        oatmeal__energy__value4: 'Енергетична цінність : 445,3г',
        oatmeal__name5: 'ВІВСЯНЕ МІНІ',
        oatmeal__article5:
          'Зустрічайте Новинку від «Cookie Monster»! Вівсяне печиво часто пропонують дитині разом з кухликом какао або молока. З’ївши MINI печиво під час сніданку, можна отримати запас енергії на тривалий час. До того ж, печиво за розміром є ну дуже міні, що теж неодмінно  сподобається малюкам. Спробуйте також MINI ELITE з шоколадними дробсами.',
        oatmeal__energy__value5: 'Енергетична цінність : 431г',
        short__name1: 'ПЕЧИВО «ЛАСУНЧИК» яблуко і кориця',
        short__article1:
          'Соковите яблуко з кислинкою та тонкі нотки кориці додають улюбленому печиву неповторного смаку, а чаювання з ним може бути нескінченно приємним!',
        short__energy__value1: 'Енергетична цінність : 424,9г',
        short__name2: 'ПЕЧИВО «ЛАСУНЧИК» вишня',
        short__article2:
          'Вишня – смачна соковита ягода, за допомогою неї створюється величезна кількість різноманітної випічки. Одним із вдалих прикладів, є наші ласунчики. Переконатись в їх смакоті, можливо тільки спробуючи їх!',
        short__energy__value2: 'Енергетична цінність : 424,4г',
        short__name3: 'ПЕЧИВО «ЛАСУНЧИК» цитрус',
        short__article3:
          'Тонкі нотки кислинки додають улюбленому печиву неповторного смаку , а чаювання з ним може бути нескінченно приємним!',
        short__energy__value3: 'Енергетична цінність : 424,4г',
        sugar__name1: 'ПЕЧИВО «ДНІСТРОВСЬКЕ»',
        sugar__article1:
          'Сказати, що печиво «Дністровське» смачне, це значить нічого не сказати, воно підходить до чаю або кави і розлітається зі столу в два рахунки!',
        sugar__energy__value1: 'Енергетична цінність : 416г',
        sugar__name2: 'ПЕЧИВО «RETRO»',
        sugar__article2:
          'Незмінний і смачний спогад із дитинства, його приємний солодкий смак до вподоби як старому так і малому!',
        sugar__energy__value2: 'Енергетична цінність : 423г',
        sweet__name1: 'КОРЖИК «ДИТЯЧИЙ» Рожевий,Білий',
        sweet__article1:
          'Пам’ятаєте, якими смачними були коржі в нашому дитинстві? Якщо ви хочете запам’ятати цей смак і на мить опинитися в дитинстві, то вам неодмінно їх спробувати!',
        sweet__energy__value1: 'Енергетична цінність : 529.8г',
        sweet__name2: 'КОРЖИК «ДИТЯЧИЙ» Білий',
        sweet__article2:
          'Пам’ятаєте, якими смачними були коржі в нашому дитинстві? Якщо ви хочете запам’ятати цей смак і на мить опинитися в дитинстві, то вам неодмінно їх спробувати!',
        sweet__energy__value2: 'Енергетична цінність : 529,8г',
        sweet__name3: 'КОРЖИК «ШКІЛЬНИЙ»',
        sweet__article3:
          'Хто виріс в Радянському Союзі, той пам’ятає ці апетитні коржики в шкільних буфетах. Тим, хто народився пізніше, настійно рекомендуємо познайомитися з цією чудовою випічкою.',
        sweet__energy__value3: 'Енергетична цінність : 531,8г',
        sweet__name4: 'КОРЖИК «СТУДЕНСЬКИЙ»',
        sweet__article4:
          'Ще один багатьма улюблений ГОСТ. Ще одні смачні ласощі для душевного чаювання.',
        sweet__energy__value4: 'Енергетична цінність : 531,6г',
        wheat__name1: 'СУХАРІ ЗДОБНІ ПШЕНИЧНІ «СТОЛИЧНІ» з родзинками',
        wheat__article1:
          'У наш час розмаїття смакових інгредієнтів і добавок рясніє на ринку, але родзинки є класикою. Сухар з родзинками містить відібрані екземпляри вищого сорту і найкращої якості, а рівномірний їх розподіл забезпечує особливий смак готового виробу',
        wheat__energy__value1: 'Енергетична цінність : 394,3г',
        diet_name1: 'ВІВСЯНЕ ПЕЧИВО з фруктозою',
        diet_desc1:
          'Люди, яким не можна цукру, теж хочуть хоч зрідка поласувати чимось солоденьким. ТМ «SOYUZ KONDITER» пропонує солодощі з фруктозою, вівсяне та кукурудзяне печиво,  смачно і не шкодить здоров’ю.',
        diet__energy__value1: 'Енергетична цінність : 424.8г',
        diet_name2: 'КУКУРУДЗЯНЕ ПЕЧИВО із фруктозою',
        diet__energy__value2: 'Енергетична цінність : 518,4г',
        read__more: 'читати більше',
        here: 'тут',
        history__pa__header1: 'Виробництво продукції',
        history__pa__header2: 'Переваги',
        history__pa__header3: 'Якість продукції',
        history__pa__header4: 'Експортні відвантаження',
        history__pa__header5: 'Співробітництво',
        history__pa1: `ТОВ «ВИРОБНИК ПЛЮС» є одним із лідерів виробництва вівсяного, кукурудзяного печива, сушки та сухарю на всій території України за останні 15 років. Ми робимо нашу продукцію старанно та з душею, вважаючи, що навіть найкращий продукт можна зробити набагато краще! Ми займаємося улюбленою справою, і сміливо ділимося своїм успіхом з усім світом.
        <br>
        Наша компанія має розвинену дистриб’юторську мережу на всій території України. Збутова структура реалізує продукцію під власними торговими марками «SOYUZ KONDITER» і «TASMAN» в обсязі понад 400 тонн щомісяця.
        `,
        history__pa2:
          'Найголовніше для нас – це турбота про добробут наших покупців, безпеку і користь наших кондитерських виробів. Використовуючи тільки високоякісну, екологічно чисту сировину, ми випускаємо продукцію найвищої якості.',
        history__pa3: `Високу якість продукції забезпечують нові технології та сучасне обладнання, високоякісні інгредієнти і контроль якості, який охоплює все виробництво – від вхідної сировини до моменту доставки продукції замовнику.
        <br>
        Свідченням цього є виданий підприємству сертифікат на систему управління безпечністю харчових продуктів згідно ДСТУ ISO 22000. Система охоплює харчовий ланцюг від виробництва до споживання харчового продукту кінцевому споживачеві.`,
        history__pa4: `Крім українського ринку наша продукція представлена на ринках інших країн світу. Компанія активно розвиває свій експортний потенціал, головним чином в країнах Європейського Союзу, Північної Америки, Середньої Азії. Продукція наших торгових марок представлена в Німеччині, Греції, Румунії, Болгарії, Угорщині, Литві, Латвії, Естонії, Грузії, Азербайджані, Ізраїлі, Канаді та ін.
        <br>
        ТОВ «ВИРОБНИК ПЛЮС» здійснює експортні відвантаження щомісяця в обсязі понад 100 тонн кондитерських виробів.`,
        history__pa5: `У роботі зі своїми клієнтами, компанія завжди керується інтересами наших партнерів і вміє знаходити компроміси.
        <br>
        Ми впевнені – з нами ви знайдете надійного і професійного партнера. Безперебійність доставок і гнучка система знижок, бездоганне виконання замовлень, індивідуальна робота з постійними клієнтами дозволяють вибудовувати довгострокові відносини.`,
        news_1_title: 'Відкриття нового складу',
        news_2_title: 'Нова лінійку фасованої продукції «Cookie Monster»',
        news_3_title: 'ТзОВ «ВИРОБНИК ПЛЮС» змінює логотип ТМ «SOYUZ KONDITER»',
        news_4_title: 'Ми постійно розвиваємося',
        news_1_article:
          'Друзі! Хочемо поділитися з Вами черговою радісною подією в житті нашої Компанії. Наш склад в м.Кривий Ріг переїхав на нову адресу, тепер ми знаходимося по вул. С.Тільгі 34в. Такі зміни сприятливо впливають на роботу нашої команди і надихають на використання нових можливостей.',
        news_2_article: `«Cookie Monster» - це не просто нова лінійка продукції, що націлена на більшу кількість споживачів, включаючи дітей, це новий член нашої команди. «Cookie Monster» - експерт з провокаційних ідей. Який надихнув нашу команду до нових звершень, надав нове дихання.Переваги - це новий дизайн упаковки, якісний продукт, зменшена вага упаковки, доступна ціна на полиці, великий термін зберігання і не тільки.Невдовзі очікуйте щось нове, щось сміливе, нетрадиційне, неформальне... Щось смачнюще.
        Перші новинки вже у продажу.`,
        news_3_article: `Новий логотип зберігає в собі обриси попередніх варіантів логотипів.  Проводячи зміни (а логотип це тільки початок), компанія прагне посилити свій бренд , зробивши його більш актуальним і таким, що відповідає загальносвітовим стандартам, підвищити лояльність існуючих споживачів і залучити нову аудиторію.
        Поступово новий логотип буде впроваджений на транспортну тару та упаковку, зміни будуть проведені в корпоративній документації, рекламних матеріалах і т.д. Надіємось, що такі зміни будуть Вам до вподоби!`,
        news_4_article:
          "Нещодавно підприємство придбало нове, сучасне обладнання-горизонтальну пакувальну машину. Зазначене обладнання автоматизувало процес фасованої продукції, тим самим збільшились об'єми нашого виробництва, а неперевершена якість залишилась незмінною.",
      },
    });
  }
}

const language = new Language(lan, elements, contact__container);

export default language;
