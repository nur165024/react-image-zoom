import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ScrollTopBar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleButton = () => {
      if (window.pageYOffset > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", toggleButton);

    return () => window.removeEventListener("scroll", toggleButton);
  }, []);
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit hic
        veritatis facere perferendis a, accusantium nobis dolore beatae? Eius
        distinctio iusto accusamus minima quasi ipsam earum ut sequi blanditiis
        rerum molestias, cum suscipit, ab a dicta quia cumque. Voluptatibus
        labore saepe aliquid, qui, inventore soluta alias tempora repellendus ad
        quasi iure optio consectetur praesentium deleniti illo beatae quas!
        Saepe nisi nobis perspiciatis provident voluptatem sunt ipsa quod ipsam
        velit beatae iure non, vitae asperiores obcaecati consequuntur nostrum
        sit exercitationem amet esse nulla, incidunt reiciendis eum aperiam!
        Adipisci rem enim, delectus, ducimus maxime quisquam natus voluptates
        earum quod ad tenetur, in voluptatum! Ab voluptates harum doloremque
        esse beatae omnis quam, similique nisi, corrupti natus illum eos sequi
        exercitationem temporibus voluptatibus enim reprehenderit molestias quos
        soluta iusto unde sunt, sit optio officia. Esse mollitia dolore laborum
        omnis cum, quos doloribus beatae ab magni eius reprehenderit veritatis
        explicabo culpa eveniet dolores veniam nobis? Neque id nulla distinctio
        voluptatum voluptates eos corporis! Sequi exercitationem earum
        dignissimos non quibusdam aliquam vitae ex sint repellat laboriosam
        error alias delectus quisquam nesciunt nostrum, cupiditate, molestias
        qui placeat praesentium hic ut. Dolor ad itaque deleniti dolorem odit
        veritatis reprehenderit fugiat saepe necessitatibus aspernatur ratione
        voluptatum, consequatur molestias, qui sunt officiis voluptate ab iusto
        cum magni soluta laboriosam adipisci iste ipsa? Delectus ad neque
        perspiciatis cumque quidem quos. Cumque, fugit blanditiis odit excepturi
        illo nesciunt culpa enim laboriosam eaque hic placeat possimus
        accusantium temporibus, quod vel laudantium vitae debitis saepe
        obcaecati sapiente. Sit libero, maxime provident laborum a eaque! Libero
        deserunt, vitae dolores in impedit nemo eius laborum. Ex facilis eveniet
        voluptatem error nesciunt nam eaque omnis, quia accusantium numquam vel
        similique, soluta inventore. Dolorum dolores ullam incidunt in sint
        totam natus voluptatem nostrum repellendus itaque. Non quas voluptatibus
        laudantium placeat consectetur nemo deleniti, veniam eaque quam fugit
        iusto et enim quo eius repellat. Sequi temporibus fugit aliquid
        consectetur explicabo voluptatibus doloribus consequuntur eos
        consequatur laborum facere repellat cumque, laudantium, similique enim
        veniam atque. Deserunt, voluptatum? Nostrum quaerat minima laudantium
        deserunt impedit qui vel perspiciatis consequuntur nihil asperiores
        illo, accusamus officiis excepturi sed iure voluptatem perferendis.
        Voluptate aliquam, illum rerum quidem quis perspiciatis facere harum
        laborum? Pariatur, excepturi voluptate? Asperiores sequi assumenda ex,
        rerum nisi nulla iusto ducimus libero minus nostrum numquam
        exercitationem sapiente a corrupti, sit eligendi pariatur, voluptates
        quo odio corporis adipisci molestias hic delectus. Quisquam ratione amet
        voluptatum veniam, rem iste quidem hic saepe iure libero quaerat, quo
        est, praesentium similique! Magni quasi quia ex et qui quis doloremque
        facilis natus veritatis aliquam odit culpa quod, eos, molestiae quos
        debitis. Ullam voluptatum expedita officiis voluptatibus assumenda
        incidunt magnam quis nobis? Eaque possimus consequatur commodi dicta
        asperiores nobis deleniti quisquam hic? Eveniet, provident ea? Ullam,
        distinctio illo? Et odio porro, perspiciatis distinctio doloribus totam
        aliquid quidem, rerum perferendis reiciendis accusantium. Nulla optio
        cum quod incidunt aliquid repudiandae maiores odit ducimus consequuntur
        nam nihil repellendus placeat, sed ut veritatis ad neque at nostrum
        autem tempora voluptatem quis sunt enim vitae. Tempore, odio. Hic facere
        est explicabo quisquam illo quidem molestiae assumenda ad saepe
        repellendus possimus unde atque sed, quod, in eum. Nulla accusamus
        perspiciatis nam ipsam ea nihil delectus corrupti iusto maxime
        recusandae ipsa atque voluptate officiis quibusdam suscipit temporibus
        laboriosam architecto vero deserunt veniam, eum placeat? Exercitationem
        error maiores ducimus quisquam earum quaerat voluptatem ratione
        laudantium itaque odio ipsa provident iusto dolores, dicta nostrum
        dolore neque obcaecati corporis? Veniam unde consequuntur quam, ipsa,
        impedit rem exercitationem assumenda fugiat iste dolor, iure autem.
        Voluptate quasi ab eum doloribus! Sequi vitae officiis delectus, id,
        distinctio deleniti sunt quas aut fugit at recusandae suscipit placeat!
        Earum obcaecati quasi eveniet dolore voluptatibus quia ullam,
        consequuntur libero doloremque beatae aspernatur sed odit soluta? Ipsa
        eos fugit illo soluta atque! Quis doloremque, id perspiciatis doloribus
        perferendis fugit temporibus amet, repellendus ipsa assumenda laborum ex
        quas! Eos omnis perspiciatis neque laborum architecto fugiat perferendis
        quos, dolores obcaecati numquam nisi autem cumque quo eligendi eveniet
        ad doloremque excepturi, earum officia itaque delectus iusto impedit
        quam! Velit quam, animi quasi autem totam debitis. Vero fugiat ipsam,
        debitis tempora sunt magnam nihil natus vel non impedit ducimus
        temporibus iusto perferendis totam assumenda magni quo beatae. Commodi
        cumque alias veniam sint explicabo a minus vel possimus soluta iste cum
        et aut itaque, temporibus odio pariatur corrupti dolor obcaecati?
        Consectetur, debitis delectus officiis accusamus magnam culpa ipsam ut
        nisi dolorem eos facilis autem sunt, repudiandae perspiciatis reiciendis
        earum dignissimos nihil iste. Voluptas accusamus atque consectetur hic
        illum laborum cum ut dignissimos aliquid illo culpa repudiandae eos
        placeat optio, architecto nobis molestiae voluptatibus ullam veritatis
        nemo dolorem? Vero sint laboriosam veritatis error porro reiciendis
        harum magni, officiis, dolore tempora aliquid sapiente? Neque, inventore
        dignissimos. Possimus, quo aliquid optio dolore quae sunt labore
        inventore distinctio officiis nam eveniet voluptate laborum nisi
        voluptatum aspernatur officia rerum recusandae explicabo itaque
        doloribus sed est cumque voluptatem illo. Debitis consequatur
        consectetur temporibus asperiores ducimus eveniet delectus officiis. Ab
        mollitia accusantium quasi minus numquam totam alias, libero nostrum
        commodi unde laborum ad, molestias molestiae suscipit inventore qui
        provident assumenda voluptates, consequatur sint excepturi enim quia
        earum reiciendis! Possimus consequuntur nemo minus dolorum dignissimos
        quisquam beatae amet placeat molestias repellendus necessitatibus dolor
        expedita tempore culpa corporis delectus vel ea soluta et, cupiditate
        iste. Quam iusto, amet laborum harum aliquid ut eligendi eum, temporibus
        beatae adipisci, quos quasi cupiditate voluptas sint ab voluptate
        blanditiis impedit deleniti! Nobis totam aperiam ab architecto ea a
        corporis asperiores inventore quasi, nemo nihil! Magni eius natus
        doloremque laborum perferendis veritatis magnam alias dolor fugiat
        quaerat nam modi provident, voluptate blanditiis at quod hic sequi
        perspiciatis asperiores repellendus eligendi repudiandae, aliquid
        assumenda tempora. Natus asperiores architecto amet non officiis omnis
        optio eum? Repudiandae sequi minus voluptatem est numquam illo nostrum,
        similique impedit, obcaecati itaque pariatur quia dignissimos optio
        nobis vero. Fugit recusandae delectus voluptas accusantium laudantium.
        Incidunt repellat necessitatibus dolores consectetur magni repellendus
        provident, alias quidem labore fugiat dicta atque magnam illo aliquam
        sunt doloribus rem temporibus perferendis cumque officia. Ipsum,
        eligendi explicabo, exercitationem, perferendis qui provident iure
        voluptates atque nisi harum doloremque.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non
        pariatur eaque odio alias. Repudiandae eos est maxime sapiente quas
        perspiciatis cupiditate officiis eligendi architecto deserunt, quasi
        placeat sit aspernatur ipsam laborum nulla eius soluta. Vel, aut tempora
        placeat maxime veritatis recusandae perferendis blanditiis nemo unde
        quae asperiores, rerum distinctio magnam enim sed modi at pariatur ad!
        Quis dolore, rerum commodi harum, eos fugiat ab modi iure ratione
        similique quod quas magni neque molestiae beatae facilis iste doloribus
        tempora unde omnis debitis error. Dolor consectetur suscipit pariatur,
        id ipsa temporibus perferendis repellendus totam fugit facilis fuga
        magni debitis reiciendis commodi. Ipsum autem veniam maiores laborum.
        Aliquid neque molestias, assumenda vero culpa eius ullam iusto, sapiente
        necessitatibus molestiae possimus voluptatem fuga? Fugiat molestias
        consequuntur sunt provident aspernatur natus atque earum dicta eligendi
        sed voluptates ea beatae quas laborum enim, autem suscipit esse tempore
        quo praesentium ad iure. Officiis cum voluptate aliquid, voluptas nam
        tempora quis soluta quia, sit ratione quam accusamus, culpa possimus eum
        vero exercitationem optio adipisci sed nihil? Necessitatibus amet dolore
        at vitae sunt architecto est obcaecati doloremque consequatur, delectus,
        reprehenderit quia temporibus! Corrupti ad ipsam dignissimos inventore?
        Deserunt perspiciatis veniam possimus velit consequatur praesentium
        nobis? Aliquid accusantium, iste perferendis at praesentium explicabo
        esse in quod sed ducimus maxime unde quia soluta totam omnis. Dolor
        nesciunt voluptates blanditiis? Ipsam natus itaque animi sunt minima
        laudantium voluptatem voluptates. Magnam, nam eius sunt qui beatae
        corporis expedita nisi cumque mollitia, perspiciatis at blanditiis illo
        numquam soluta reiciendis ullam accusamus alias voluptas laudantium
        voluptatum quos vitae? Quisquam, vel sint mollitia explicabo
        perspiciatis rem doloremque ea nulla vitae distinctio corporis, dicta
        aliquid id! Sit, placeat. Maiores nihil odio voluptatum, minus
        praesentium eum ipsum, iste sequi ad, quidem pariatur. Natus corporis
        quae facilis amet praesentium saepe! Maiores totam esse impedit dolore
        commodi libero accusamus ut deserunt quasi dicta sint suscipit
        voluptatibus quidem saepe beatae architecto recusandae asperiores
        molestias, tempora quam. Ipsam dicta velit qui vero rem. Nesciunt
        assumenda illo architecto id tempora rerum. Perspiciatis mollitia
        officia assumenda cupiditate, ducimus et magni tempora pariatur ullam
        vitae at maxime veniam quidem repudiandae nostrum error placeat,
        accusamus exercitationem modi asperiores nam non. Deserunt at eligendi
        exercitationem assumenda voluptates distinctio ea eos placeat omnis
        corrupti iusto modi a, esse accusantium nulla necessitatibus ipsa
        repudiandae obcaecati odit ab! Est at illum rerum labore aliquam. Cumque
        corporis animi rem adipisci, omnis aliquam esse minima. Quia a similique
        iure, commodi, veritatis nemo aliquid, ea nobis modi asperiores sint
        illum nisi. Similique modi dolor id quasi mollitia, eligendi facere. Nam
        voluptate magni suscipit fugiat consectetur tempore eligendi
        necessitatibus quo corporis rem molestias beatae qui aperiam, ullam vel
        quas enim excepturi repellendus fuga, praesentium cupiditate. Ea
        explicabo sed corrupti eaque ipsa suscipit nobis eligendi hic provident
        maxime architecto omnis excepturi soluta minima amet saepe mollitia
        eius, illum aspernatur non consequuntur in! Qui libero perferendis quas
        corrupti. Modi repellendus ipsam possimus delectus officiis! Consequatur
        ut aspernatur rerum? Facilis praesentium ea aperiam itaque accusantium
        distinctio dolorem fugiat minima expedita asperiores debitis
        consequuntur natus soluta, quas, error pariatur dolor odit eligendi
        impedit. Excepturi non temporibus hic fugiat maiores vel officiis
        recusandae, facilis cum maxime ea, dignissimos magni aut ipsam
        consequatur, numquam reiciendis repudiandae optio laborum. Ipsa saepe
        perferendis molestiae impedit officia quis, facilis ad itaque sapiente
        mollitia cumque quam inventore veniam magni eveniet sint repellendus
        deserunt eius excepturi quia fuga porro hic atque eaque. Incidunt enim
        voluptates molestiae voluptatum id quos veritatis porro aliquid fugiat
        cum deleniti, at, nobis illo, dolores ipsa numquam ad? Labore nesciunt
        cumque rem! Qui sapiente ex obcaecati accusamus, modi dolorem odit
        aperiam rerum laborum eveniet quaerat ipsa quos cum ratione excepturi
        blanditiis. Minus inventore voluptates numquam repellendus nostrum,
        voluptatem repudiandae modi recusandae, distinctio vero minima quos
        enim, labore culpa natus fugit. Illo, veritatis excepturi sequi
        assumenda eligendi quos fugiat, similique blanditiis doloremque
        provident voluptatibus voluptate consectetur voluptates eius aliquam
        labore eaque quisquam praesentium aliquid. Distinctio velit odit
        doloremque aliquid at impedit laboriosam assumenda quisquam deleniti
        iusto ipsam reiciendis totam beatae quae consequatur hic, alias, unde
        ipsum aut quis a sequi possimus. Ipsam sint porro illum assumenda sit
        quam quisquam incidunt fugiat inventore laboriosam accusamus id, quaerat
        pariatur possimus enim quo omnis, soluta doloremque sunt cumque
        consequatur architecto officia. Quisquam aut cumque distinctio pariatur
        accusamus, ad exercitationem animi laboriosam dolore odit labore error
        in maxime corporis accusantium aspernatur. Nam consectetur voluptatum
        minus optio suscipit? Dolorem, praesentium debitis cupiditate ad
        molestiae eius atque aut nisi vitae ut, magni est asperiores officia
        porro! Laudantium deserunt quasi, esse, velit illo rerum odio, porro
        consequuntur recusandae mollitia quia adipisci. Molestiae reiciendis
        illum, officiis excepturi natus perspiciatis quasi! Pariatur rem iusto
        corrupti tempore consequuntur, assumenda ab suscipit. Reprehenderit,
        aperiam exercitationem? Dolorem iste obcaecati dolorum consequuntur
        ipsum quam possimus asperiores. Inventore ipsum est neque atque nostrum
        aliquid consequatur voluptate aperiam distinctio quae culpa, facilis
        magni iste nihil quidem, dignissimos sapiente! Quia maiores nobis iusto
        illo officia suscipit libero incidunt officiis quod provident eos
        similique magnam minus reprehenderit, dicta earum odio perspiciatis, qui
        omnis facere assumenda? Neque accusantium esse, error doloremque fugit
        ullam facilis necessitatibus omnis eos in maiores illo ea fugiat nihil,
        facere iusto repudiandae iure perferendis nam. Repellat ullam neque
        eligendi, error maiores alias sint dolor laudantium odit numquam animi
        harum ipsa, atque, quis porro voluptatibus! Molestiae beatae earum
        quaerat suscipit. Molestiae consequatur vero blanditiis ea iste voluptas
        et harum! Eos nam deleniti nihil alias quos obcaecati aliquam sit.
        Tenetur labore accusamus, minima consequatur culpa tempore, quis
        recusandae et temporibus magni dignissimos odit magnam ut laudantium
        placeat molestias soluta a. Cupiditate deserunt modi perspiciatis iste
        ratione reprehenderit, tempore quae minima necessitatibus quos ea rerum
        numquam dolore facere qui quis dolorem repellendus atque repellat itaque
        natus nostrum doloribus reiciendis? Maiores temporibus ullam, velit hic
        et expedita corrupti distinctio dolores voluptatem, nihil laudantium
        quod enim voluptatum rerum quas aliquam recusandae sint quibusdam harum
        dolorem pariatur. Officiis quidem quam nisi libero quia temporibus
        doloribus quisquam labore eius quaerat officia, accusamus consequatur
        fugiat. Dicta vitae iusto eligendi repudiandae ullam accusamus unde
        porro modi, eius voluptatum in! Vitae perferendis cum in fugiat saepe
        unde laborum quas corporis praesentium magnam distinctio earum esse odit
        odio et inventore, aperiam suscipit qui, assumenda officia. Labore
        accusamus, libero atque, omnis corrupti incidunt modi vitae amet
        temporibus ullam asperiores deleniti, maiores ab odit accusantium
        corporis dolores voluptates quos suscipit? Dolore veritatis quaerat
        mollitia molestiae dolorem, voluptas aliquam accusamus asperiores totam
        aperiam quia, laborum neque quod minima quasi, quibusdam officiis.
        Necessitatibus officiis impedit vitae corporis labore quae similique,
        saepe ipsam autem dolore provident beatae minima. Reiciendis, mollitia.
        Necessitatibus, nostrum ipsum aspernatur quaerat molestiae minima neque
        praesentium minus vero alias? Qui, temporibus animi. Quas amet molestiae
        vitae quisquam repellendus ratione, accusamus distinctio provident
        fugiat numquam neque est voluptates suscipit doloremque itaque
        dignissimos cumque quasi facilis minima impedit quibusdam. Inventore,
        tenetur deleniti eveniet suscipit ducimus adipisci blanditiis quod atque
        debitis aut distinctio natus magnam laborum ut. Aspernatur fugit rem
        sint ipsa dolore, esse provident blanditiis atque alias neque laudantium
        cum eos tenetur magni voluptates impedit placeat et totam. Modi ipsam
        quod possimus saepe neque commodi nulla, esse eligendi ab consectetur
        molestiae eius cumque maiores, culpa vitae autem tempora, iste sit unde
        earum. Tempore, saepe veniam doloribus natus doloremque unde odio
        eveniet numquam itaque quae labore voluptates, nulla asperiores,
        repellendus iusto nemo dicta explicabo perferendis quos. Fugit laborum,
        numquam consequuntur provident aut magni ratione ipsum commodi nulla? Ea
        tempora ipsam in nostrum voluptatem libero atque itaque corporis
        molestias tempore quisquam, consequuntur vel quidem maxime, natus
        repellat modi eaque repudiandae minus excepturi deserunt velit omnis.
        Facere odio fugiat nisi deserunt beatae sapiente, cum laborum, adipisci
        quisquam amet consequatur quod debitis similique tempora aliquid iusto
        eveniet incidunt ea ut libero provident laudantium consectetur corporis
        voluptates. Adipisci nam aliquid vitae tempora illum rem accusamus quia
        dolor. Fuga hic qui distinctio ex asperiores quam rerum, iure enim illo
        recusandae voluptatibus consequuntur provident corrupti, consectetur rem
        debitis nemo perferendis cumque eligendi dignissimos cum fugiat placeat
        obcaecati voluptatum! Optio facere quidem eum magnam assumenda soluta
        repellendus molestiae officiis laboriosam obcaecati, earum laudantium
        cupiditate cum eligendi labore? Delectus officiis impedit qui non
        distinctio, fuga aut eius provident aliquam, cumque tempora temporibus
        id esse repellat natus maxime quam dolore, voluptatum at? Doloribus
        culpa dolorem ut cupiditate voluptate commodi quod consectetur tempora
        autem voluptates saepe sit at perspiciatis est odit voluptatibus sunt
        magni, eveniet non deserunt. Placeat a quod excepturi, rerum aliquid
        veniam ullam qui dolorem? Molestias accusamus, saepe repellendus sed
        veniam amet quasi quod non iure, exercitationem temporibus error
        excepturi architecto modi eaque perspiciatis incidunt voluptatibus.
        Veritatis ab sequi illo distinctio voluptates illum animi corporis, amet
        optio omnis provident enim dolorum magni quam aperiam, expedita ipsum
        soluta debitis. Consectetur, laudantium consequuntur velit iste corrupti
        nihil. Quas sunt quia totam. Atque, magnam nesciunt. Earum sunt
        quibusdam deleniti doloribus, aspernatur inventore. Nostrum unde aliquam
        dolor. Soluta natus praesentium vitae blanditiis aperiam aliquid maiores
        quaerat laudantium autem, repellendus dolores rerum ipsa vel hic
        reiciendis quam aliquam facilis error inventore officiis quibusdam.
        Suscipit eum unde delectus nam dolor perferendis, minima earum.
        Explicabo mollitia hic temporibus accusamus. Fugit iusto ad voluptatum
        quae hic laborum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae architecto
        inventore optio quis officia quas magni distinctio, eius esse cupiditate
        accusamus totam itaque consequuntur facilis. Nisi dolore autem nihil,
        sint reiciendis veniam minima. Voluptates quo fuga accusamus iure animi,
        reprehenderit incidunt quas repudiandae atque praesentium dolorem earum,
        quaerat corrupti nihil repellat? Rerum laboriosam nesciunt totam sed
        tempora facilis amet quibusdam voluptatum optio. Consequatur voluptas
        atque fuga adipisci rerum tempora iure quis nam quae! Non, error. Ad
        laborum iusto atque asperiores molestias quasi sunt ipsam fugiat
        delectus recusandae tempore earum alias quod quam consequuntur hic
        accusantium ut quaerat quo tenetur, corporis magni porro! Veniam hic
        numquam quae, impedit quisquam blanditiis consequuntur quos ipsum iure,
        voluptas mollitia adipisci. Sunt, animi? Hic nobis facilis ipsam atque
        sit? At accusamus quas quos, ipsam maxime doloribus placeat quidem?
        Libero a voluptate esse illo ut porro, illum ad commodi laudantium
        officiis perferendis provident eaque dolor non possimus mollitia dicta
        soluta fuga sit nisi eum quam quidem exercitationem! Rem esse quae earum
        impedit at hic blanditiis eum ipsum? Natus ex ea mollitia tempore
        distinctio, recusandae sint architecto aperiam, explicabo, sed libero
        deserunt odio. Autem esse repellendus cupiditate cum alias quod placeat
        fugiat quasi laborum, ullam rem dolor tempore provident nemo quisquam!
        Quo accusamus quos eius voluptatum odit tempore, dolor dignissimos ipsum
        dolorem, omnis blanditiis aperiam commodi maiores expedita sint illum
        error aspernatur vitae? Quasi ipsa corrupti fuga delectus, eos ex? Quis
        laudantium odit, expedita eos maiores obcaecati consequatur, ipsam,
        necessitatibus numquam inventore omnis voluptas a eligendi natus eius
        error quidem aliquam sequi praesentium vitae dolor impedit libero! Ullam
        deserunt provident libero aperiam velit? Iste consectetur nobis rem
        commodi rerum reprehenderit corrupti, asperiores, illo dolores illum id
        nihil vitae delectus consequuntur quo nisi expedita ipsa impedit labore
        sit saepe. Illo fuga quibusdam porro deleniti, perspiciatis dolores
        corrupti! Aliquid quaerat rem nesciunt accusantium deserunt eveniet
        asperiores quasi molestias debitis, reprehenderit, repudiandae possimus
        sequi eos error sit impedit! Amet nostrum ex quod? Voluptatem tempora
        molestiae quis, nemo quas iste sed pariatur dicta itaque nostrum
        doloribus laudantium maxime animi ratione quam. Esse commodi quis ex
        blanditiis facere voluptatibus nihil architecto aliquid molestiae minus
        culpa non earum voluptate eaque atque, voluptatem unde. Debitis neque
        explicabo tempora porro eos fuga sequi suscipit. Consequuntur aperiam
        consectetur ullam nihil ab dolore laboriosam esse deserunt voluptas
        voluptatum? Esse accusantium beatae maiores ipsum et temporibus sit?
        Soluta dolor, vero, voluptate accusamus magni nisi reprehenderit iure
        enim recusandae iusto quidem alias, minima blanditiis at. Explicabo
        culpa eveniet, perferendis obcaecati ducimus corporis ipsa rerum,
        cupiditate quis tempora quas molestias at placeat iste aliquam similique
        harum quod itaque non et eaque sequi minima accusantium animi? Ea
        incidunt quam consequatur harum dolorem dolor assumenda fuga aspernatur
        error? Illo aliquid nostrum at nisi nobis laboriosam expedita culpa, rem
        ea a nihil quod dolor dolorem architecto perferendis ab suscipit.
        Repellendus, harum voluptates illo labore architecto tempora alias eius
        aliquid velit culpa expedita rem voluptatem, illum, eaque laborum porro
        incidunt eum laudantium quos inventore magnam amet nostrum ullam. Eum
        accusantium, sint eius, ipsa dicta recusandae voluptatem harum tempore
        enim non ad ullam voluptas vel cupiditate. Eius ipsa temporibus eveniet
        non quos consectetur reiciendis totam laudantium amet, provident impedit
        vel dolor animi. Possimus, corrupti minima doloribus recusandae culpa
        pariatur ducimus hic sapiente eaque placeat voluptatem eos inventore
        nisi aperiam est totam distinctio iste explicabo ipsam officiis dolorum.
        Quia asperiores dolores obcaecati, recusandae ipsam consequatur
        temporibus similique quasi, eum explicabo labore nostrum maxime rerum
        delectus aut, adipisci corrupti! Impedit unde sit enim cupiditate
        dolorum natus possimus cumque eos eveniet saepe illum nulla quibusdam
        illo, esse qui autem sint dolore provident vero, iusto, corrupti libero
        placeat reprehenderit atque! Dicta magnam aliquid repellat, voluptates
        beatae labore suscipit optio minima perspiciatis quam quia perferendis
        vero exercitationem dolorum eaque facere, mollitia dolores animi!
        Aperiam totam neque, sunt est beatae sed optio nobis quaerat vel nam
        ratione consequuntur quibusdam sequi mollitia, minus, quod excepturi
        autem aliquam quae molestias at! Modi excepturi iusto quia harum! Vero
        corporis corrupti, deleniti ipsum reiciendis quidem voluptatum sequi
        pariatur. Rem, quisquam, impedit vel omnis odit neque animi perferendis
        unde doloremque eveniet eaque quibusdam fugiat maxime praesentium
        tenetur illum, aspernatur nemo adipisci amet exercitationem iure
        consectetur? Eaque quia obcaecati ad sed provident ut earum nam aut
        voluptatem natus ea suscipit commodi perspiciatis nulla quos fugiat
        magni tempore, omnis totam eveniet? Tenetur velit modi, quod cum ratione
        aperiam architecto dolores earum, veritatis qui ut nihil provident
        porro. Nulla, voluptates quaerat tenetur corporis eligendi officia
        veniam labore, recusandae harum necessitatibus quidem, ab dolorem
        eveniet eos fuga autem quo pariatur? Libero quas voluptas illum dolores
        nesciunt ratione debitis. Recusandae quidem ullam laudantium doloremque
        ad? Quo, eveniet! Modi corporis, dolor autem nostrum incidunt officiis
        optio blanditiis nemo. Aperiam, odio? Eos eum voluptas mollitia
        distinctio dolorum ab cumque reprehenderit repellendus dolor debitis
        animi asperiores officiis, nulla vel laborum. Praesentium natus facere
        dolor quos illo consequatur deleniti quibusdam nam, voluptatum debitis
        necessitatibus, eligendi dignissimos iste molestias ab dolorem sed
        libero blanditiis ducimus beatae quaerat ullam? Error vero ad id vitae
        rerum ex quas veniam quae iure quibusdam facere voluptates perferendis
        est sunt optio, adipisci nihil, minus quis aspernatur eos quam! Officia
        iste necessitatibus at dignissimos iusto dolorem omnis nobis, fugiat
        quidem molestiae tempore quaerat ipsum id. Libero inventore, ab dicta,
        modi maxime expedita officia optio velit sequi explicabo dolorum
        quisquam quas aspernatur qui similique suscipit ducimus deserunt
        molestiae quo numquam, vitae magnam. Facere tenetur repudiandae sequi
        sapiente libero recusandae fugit veritatis eveniet corrupti repellendus
        voluptatibus incidunt voluptas quod ipsa exercitationem vel labore
        dolorum animi, vitae iste. Aliquid amet, repellendus dolore molestias
        facere perspiciatis itaque officia consequatur quis officiis sint quo
        eaque tempora tempore voluptatibus, molestiae impedit quam vero totam
        dolorem nostrum? Fugiat distinctio aperiam non quidem ducimus minus
        facere explicabo tenetur, rerum culpa dolor hic soluta, perferendis
        cumque odio! Asperiores sunt nam maxime obcaecati, aperiam temporibus
        veniam, minus earum facere architecto, saepe labore consequatur! Natus
        ipsa fugit, quae provident sed voluptatum exercitationem fuga! Esse
        impedit cum aliquid pariatur enim. Ipsum corrupti modi eos ipsam fugit
        repellat facere corporis, praesentium ipsa in laudantium alias!
      </p>

      {show && (
        <div className="btnButton">
          <button onClick={handleClick}>Go Top Bar</button>
        </div>
      )}
    </div>
  );
};

export default ScrollTopBar;
