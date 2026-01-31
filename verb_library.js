/* =====================================================
   FRENCH VERB CONJUGATIONS DATABASE
   ===================================================== */

const VERBS = {
  /* ==================== MOVEMENT VERBS ==================== */
    'devenir': {
        infinitive: 'devenir',
        present: { je:'deviens', tu:'deviens', il:'devient', nous:'devenons', vous:'devenez', ils:'deviennent' },
        'passe-compose': { je:'suis devenu', tu:'es devenu', il:'est devenu', nous:'sommes devenus', vous:'êtes devenus', ils:'sont devenus' },
        imparfait: { je:'devenais', tu:'devenais', il:'devenait', nous:'devenions', vous:'deveniez', ils:'devenaient' },
        'futur-proche': { je:'vais devenir', tu:'vas devenir', il:'va devenir', nous:'allons devenir', vous:'allez devenir', ils:'vont devenir' },
        'futur-simple': { je:'deviendrai', tu:'deviendras', il:'deviendra', nous:'deviendrons', vous:'deviendrez', ils:'deviendront' },
        'conditionnel-present': { je:'deviendrais', tu:'deviendrais', il:'deviendrait', nous:'deviendrions', vous:'deviendriez', ils:'deviendraient' }
    },
    'revenir': {
        infinitive: 'revenir',
        present: { je:'reviens', tu:'reviens', il:'revient', nous:'revenons', vous:'revenez', ils:'reviennent' },
        'passe-compose': { je:'suis revenu', tu:'es revenu', il:'est revenu', nous:'sommes revenus', vous:'êtes revenus', ils:'sont revenus' },
        imparfait: { je:'revenais', tu:'revenais', il:'revenait', nous:'revenions', vous:'reveniez', ils:'revenaient' },
        'futur-proche': { je:'vais revenir', tu:'vas revenir', il:'va revenir', nous:'allons revenir', vous:'allez revenir', ils:'vont revenir' },
        'futur-simple': { je:'reviendrai', tu:'reviendras', il:'reviendra', nous:'reviendrons', vous:'reviendrez', ils:'reviendront' },
        'conditionnel-present': { je:'reviendrais', tu:'reviendrais', il:'reviendrait', nous:'reviendrions', vous:'reviendriez', ils:'reviendraient' }
    },
    'monter': {
        infinitive: 'monter',
        present: { je:'monte', tu:'montes', il:'monte', nous:'montons', vous:'montez', ils:'montent' },
        'passe-compose': { je:'suis monté', tu:'es monté', il:'est monté', nous:'sommes montés', vous:'êtes montés', ils:'sont montés' },
        imparfait: { je:'montais', tu:'montais', il:'montait', nous:'montions', vous:'montiez', ils:'montaient' },
        'futur-proche': { je:'vais monter', tu:'vas monter', il:'va monter', nous:'allons monter', vous:'allez monter', ils:'vont monter' },
        'futur-simple': { je:'monterai', tu:'monteras', il:'montera', nous:'monterons', vous:'monterez', ils:'monteront' },
        'conditionnel-present': { je:'monterais', tu:'monterais', il:'monterait', nous:'monterions', vous:'monteriez', ils:'monteraient' }
    },
    'rentrer': {
        infinitive: 'rentrer',
        present: { je:'rentre', tu:'rentres', il:'rentre', nous:'rentrons', vous:'rentrez', ils:'rentrent' },
        'passe-compose': { je:'suis rentré', tu:'es rentré', il:'est rentré', nous:'sommes rentrés', vous:'êtes rentrés', ils:'sont rentrés' },
        imparfait: { je:'rentrais', tu:'rentrais', il:'rentrait', nous:'rentrions', vous:'rentriez', ils:'rentraient' },
        'futur-proche': { je:'vais rentrer', tu:'vas rentrer', il:'va rentrer', nous:'allons rentrer', vous:'allez rentrer', ils:'vont rentrer' },
        'futur-simple': { je:'rentrerai', tu:'rentreras', il:'rentrera', nous:'rentrerons', vous:'rentrerez', ils:'rentreront' },
        'conditionnel-present': { je:'rentrerais', tu:'rentrerais', il:'rentrerait', nous:'rentrerions', vous:'rentreriez', ils:'rentreraient' }
    },
    'sortir': {
        infinitive: 'sortir',
        present: { je:'sors', tu:'sors', il:'sort', nous:'sortons', vous:'sortez', ils:'sortent' },
        'passe-compose': { je:'suis sorti', tu:'es sorti', il:'est sorti', nous:'sommes sortis', vous:'êtes sortis', ils:'sont sortis' },
        imparfait: { je:'sortais', tu:'sortais', il:'sortait', nous:'sortions', vous:'sortiez', ils:'sortaient' },
        'futur-proche': { je:'vais sortir', tu:'vas sortir', il:'va sortir', nous:'allons sortir', vous:'allez sortir', ils:'vont sortir' },
        'futur-simple': { je:'sortirai', tu:'sortiras', il:'sortira', nous:'sortirons', vous:'sortirez', ils:'sortiront' },
        'conditionnel-present': { je:'sortirais', tu:'sortirais', il:'sortirait', nous:'sortirions', vous:'sortiriez', ils:'sortiraient' }
    },
    'venir': {
        infinitive: 'venir',
        present: { je:'viens', tu:'viens', il:'vient', nous:'venons', vous:'venez', ils:'viennent' },
        'passe-compose': { je:'suis venu', tu:'es venu', il:'est venu', nous:'sommes venus', vous:'êtes venus', ils:'sont venus' },
        imparfait: { je:'venais', tu:'venais', il:'venait', nous:'venions', vous:'veniez', ils:'venaient' },
        'futur-proche': { je:'vais venir', tu:'vas venir', il:'va venir', nous:'allons venir', vous:'allez venir', ils:'vont venir' },
        'futur-simple': { je:'viendrai', tu:'viendras', il:'viendra', nous:'viendrons', vous:'viendrez', ils:'viendront' },
        'conditionnel-present': { je:'viendrais', tu:'viendrais', il:'viendrait', nous:'viendrions', vous:'viendriez', ils:'viendraient' }
    },
    'aller': {
        infinitive: 'aller',
        present: { je:'vais', tu:'vas', il:'va', nous:'allons', vous:'allez', ils:'vont' },
        'passe-compose': { je:'suis allé', tu:'es allé', il:'est allé', nous:'sommes allés', vous:'êtes allés', ils:'sont allés' },
        imparfait: { je:'allais', tu:'allais', il:'allait', nous:'allions', vous:'alliez', ils:'allaient' },
        'futur-proche': { je:'vais aller', tu:'vas aller', il:'va aller', nous:'allons aller', vous:'allez aller', ils:'vont aller' },
        'futur-simple': { je:'irai', tu:'iras', il:'ira', nous:'irons', vous:'irez', ils:'iront' },
        'conditionnel-present': { je:'irais', tu:'irais', il:'irait', nous:'irions', vous:'iriez', ils:'iraient' }
    },
    'naître': {
        infinitive: 'naître',
        present: { je:'nais', tu:'nais', il:'naît', nous:'naissons', vous:'naissez', ils:'naissent' },
        'passe-compose': { je:'suis né', tu:'es né', il:'est né', nous:'sommes nés', vous:'êtes nés', ils:'sont nés' },
        imparfait: { je:'naissais', tu:'naissais', il:'naissait', nous:'naissions', vous:'naissiez', ils:'naissaient' },
        'futur-proche': { je:'vais naître', tu:'vas naître', il:'va naître', nous:'allons naître', vous:'allez naître', ils:'vont naître' },
        'futur-simple': { je:'naîtrai', tu:'naîtras', il:'naîtra', nous:'naîtrons', vous:'naîtrez', ils:'naîtront' },
        'conditionnel-present': { je:'naîtrais', tu:'naîtrais', il:'naîtrait', nous:'naîtrions', vous:'naîtriez', ils:'naîtraient' }
    },
    'descendre': {
        infinitive: 'descendre',
        present: { je:'descends', tu:'descends', il:'descend', nous:'descendons', vous:'descendez', ils:'descendent' },
        'passe-compose': { je:'suis descendu', tu:'es descendu', il:'est descendu', nous:'sommes descendus', vous:'êtes descendus', ils:'sont descendus' },
        imparfait: { je:'descendais', tu:'descendais', il:'descendait', nous:'descendions', vous:'descendiez', ils:'descendaient' },
        'futur-proche': { je:'vais descendre', tu:'vas descendre', il:'va descendre', nous:'allons descendre', vous:'allez descendre', ils:'vont descendre' },
        'futur-simple': { je:'descendrai', tu:'descendras', il:'descendra', nous:'descendrons', vous:'descendrez', ils:'descendront' },
        'conditionnel-present': { je:'descendrais', tu:'descendrais', il:'descendrait', nous:'descendrions', vous:'descendriez', ils:'descendraient' }
    },
    'entrer': {
        infinitive: 'entrer',
        present: { je:'entre', tu:'entres', il:'entre', nous:'entrons', vous:'entrez', ils:'entrent' },
        'passe-compose': { je:'suis entré', tu:'es entré', il:'est entré', nous:'sommes entrés', vous:'êtes entrés', ils:'sont entrés' },
        imparfait: { je:'entrais', tu:'entrais', il:'entrait', nous:'entrions', vous:'entriez', ils:'entraient' },
        'futur-proche': { je:'vais entrer', tu:'vas entrer', il:'va entrer', nous:'allons entrer', vous:'allez entrer', ils:'vont entrer' },
        'futur-simple': { je:'entrerai', tu:'entreras', il:'entrera', nous:'entrerons', vous:'entrerez', ils:'entreront' },
        'conditionnel-present': { je:'entrerais', tu:'entrerais', il:'entrerait', nous:'entrerions', vous:'entreriez', ils:'entreraient' }
    },
    'retourner': {
        infinitive: 'retourner',
        present: { je:'retourne', tu:'retournes', il:'retourne', nous:'retournons', vous:'retournez', ils:'retournent' },
        'passe-compose': { je:'suis retourné', tu:'es retourné', il:'est retourné', nous:'sommes retournés', vous:'êtes retournés', ils:'sont retournés' },
        imparfait: { je:'retournais', tu:'retournais', il:'retournait', nous:'retournions', vous:'retourniez', ils:'retournaient' },
        'futur-proche': { je:'vais retourner', tu:'vas retourner', il:'va retourner', nous:'allons retourner', vous:'allez retourner', ils:'vont retourner' },
        'futur-simple': { je:'retournerai', tu:'retourneras', il:'retournera', nous:'retournerons', vous:'retournerez', ils:'retourneront' },
        'conditionnel-present': { je:'retournerais', tu:'retournerais', il:'retournerait', nous:'retournerions', vous:'retourneriez', ils:'retourneraient' }
    },
    'tomber': {
        infinitive: 'tomber',
        present: { je:'tombe', tu:'tombes', il:'tombe', nous:'tombons', vous:'tombez', ils:'tombent' },
        'passe-compose': { je:'suis tombé', tu:'es tombé', il:'est tombé', nous:'sommes tombés', vous:'êtes tombés', ils:'sont tombés' },
        imparfait: { je:'tombais', tu:'tombais', il:'tombait', nous:'tombions', vous:'tombiez', ils:'tombaient' },
        'futur-proche': { je:'vais tomber', tu:'vas tomber', il:'va tomber', nous:'allons tomber', vous:'allez tomber', ils:'vont tomber' },
        'futur-simple': { je:'tomberai', tu:'tomberas', il:'tombera', nous:'tomberons', vous:'tomberez', ils:'tomberont' },
        'conditionnel-present': { je:'tomberais', tu:'tomberais', il:'tomberait', nous:'tomberions', vous:'tomberiez', ils:'tomberaient' }
    },
    'rester': {
        infinitive: 'rester',
        present: { je:'reste', tu:'restes', il:'reste', nous:'restons', vous:'restez', ils:'restent' },
        'passe-compose': { je:'suis resté', tu:'es resté', il:'est resté', nous:'sommes restés', vous:'êtes restés', ils:'sont restés' },
        imparfait: { je:'restais', tu:'restais', il:'restait', nous:'restions', vous:'restiez', ils:'restaient' },
        'futur-proche': { je:'vais rester', tu:'vas rester', il:'va rester', nous:'allons rester', vous:'allez rester', ils:'vont rester' },
        'futur-simple': { je:'resterai', tu:'resteras', il:'restera', nous:'resterons', vous:'resterez', ils:'resteront' },
        'conditionnel-present': { je:'resterais', tu:'resterais', il:'resterait', nous:'resterions', vous:'resteriez', ils:'resteraient' }
    },
    'arriver': {
        infinitive: 'arriver',
        present: { je:'arrive', tu:'arrives', il:'arrive', nous:'arrivons', vous:'arrivez', ils:'arrivent' },
        'passe-compose': { je:'suis arrivé', tu:'es arrivé', il:'est arrivé', nous:'sommes arrivés', vous:'êtes arrivés', ils:'sont arrivés' },
        imparfait: { je:'arrivais', tu:'arrivais', il:'arrivait', nous:'arrivions', vous:'arriviez', ils:'arrivaient' },
        'futur-proche': { je:'vais arriver', tu:'vas arriver', il:'va arriver', nous:'allons arriver', vous:'allez arriver', ils:'vont arriver' },
        'futur-simple': { je:'arriverai', tu:'arriveras', il:'arrivera', nous:'arriverons', vous:'arriverez', ils:'arriveront' },
        'conditionnel-present': { je:'arriverais', tu:'arriverais', il:'arriverait', nous:'arriverions', vous:'arriveriez', ils:'arriveraient' }
    },
    'mourir': {
        infinitive: 'mourir',
        present: { je:'meurs', tu:'meurs', il:'meurt', nous:'mourons', vous:'mourez', ils:'meurent' },
        'passe-compose': { je:'suis mort', tu:'es mort', il:'est mort', nous:'sommes morts', vous:'êtes morts', ils:'sont morts' },
        imparfait: { je:'mourais', tu:'mourais', il:'mourait', nous:'mourions', vous:'mouriez', ils:'mouraient' },
        'futur-proche': { je:'vais mourir', tu:'vas mourir', il:'va mourir', nous:'allons mourir', vous:'allez mourir', ils:'vont mourir' },
        'futur-simple': { je:'mourrai', tu:'mourras', il:'mourra', nous:'mourrons', vous:'mourrez', ils:'mourront' },
        'conditionnel-present': { je:'mourrais', tu:'mourrais', il:'mourrait', nous:'mourrions', vous:'mourriez', ils:'mourraient' }
    },
    'partir': {
        infinitive: 'partir',
        present: { je:'pars', tu:'pars', il:'part', nous:'partons', vous:'partez', ils:'partent' },
        'passe-compose': { je:'suis parti', tu:'es parti', il:'est parti', nous:'sommes partis', vous:'êtes partis', ils:'sont partis' },
        imparfait: { je:'partais', tu:'partais', il:'partait', nous:'partions', vous:'partiez', ils:'partaient' },
        'futur-proche': { je:'vais partir', tu:'vas partir', il:'va partir', nous:'allons partir', vous:'allez partir', ils:'vont partir' },
        'futur-simple': { je:'partirai', tu:'partiras', il:'partira', nous:'partirons', vous:'partirez', ils:'partiront' },
        'conditionnel-present': { je:'partirais', tu:'partirais', il:'partirait', nous:'partirions', vous:'partiriez', ils:'partiraient' }
    },
    'passer': {
        infinitive: 'passer',
        present: { je:'passe', tu:'passes', il:'passe', nous:'passons', vous:'passez', ils:'passent' },
        'passe-compose': { je:'suis passé', tu:'es passé', il:'est passé', nous:'sommes passés', vous:'êtes passés', ils:'sont passés' },
        imparfait: { je:'passais', tu:'passais', il:'passait', nous:'passions', vous:'passiez', ils:'passaient' },
        'futur-proche': { je:'vais passer', tu:'vas passer', il:'va passer', nous:'allons passer', vous:'allez passer', ils:'vont passer' },
        'futur-simple': { je:'passerai', tu:'passeras', il:'passera', nous:'passerons', vous:'passerez', ils:'passeront' },
        'conditionnel-present': { je:'passerais', tu:'passerais', il:'passerait', nous:'passerions', vous:'passeriez', ils:'passeraient' }
    },

    /* ==================== IRREGULAR VERBS ==================== */
    'avoir': {
        infinitive: 'avoir',
        present: { je:'ai', tu:'as', il:'a', nous:'avons', vous:'avez', ils:'ont' },
        'passe-compose': { je:'ai eu', tu:'as eu', il:'a eu', nous:'avons eu', vous:'avez eu', ils:'ont eu' },
        imparfait: { je:'avais', tu:'avais', il:'avait', nous:'avions', vous:'aviez', ils:'avaient' },
        'futur-proche': { je:'vais avoir', tu:'vas avoir', il:'va avoir', nous:'allons avoir', vous:'allez avoir', ils:'vont avoir' },
        'futur-simple': { je:'aurai', tu:'auras', il:'aura', nous:'aurons', vous:'aurez', ils:'auront' },
        'conditionnel-present': { je:'aurais', tu:'aurais', il:'aurait', nous:'aurions', vous:'auriez', ils:'auraient' }
    },
    'être': {
        infinitive: 'être',
        present: { je:'suis', tu:'es', il:'est', nous:'sommes', vous:'êtes', ils:'sont' },
        'passe-compose': { je:'ai été', tu:'as été', il:'a été', nous:'avons été', vous:'avez été', ils:'ont été' },
        imparfait: { je:'étais', tu:'étais', il:'était', nous:'étions', vous:'étiez', ils:'étaient' },
        'futur-proche': { je:'vais être', tu:'vas être', il:'va être', nous:'allons être', vous:'allez être', ils:'vont être' },
        'futur-simple': { je:'serai', tu:'seras', il:'sera', nous:'serons', vous:'serez', ils:'seront' },
        'conditionnel-present': { je:'serais', tu:'serais', il:'serait', nous:'serions', vous:'seriez', ils:'seraient' }
    },
    'faire': {
        infinitive: 'faire',
        present: { je:'fais', tu:'fais', il:'fait', nous:'faisons', vous:'faites', ils:'font' },
        'passe-compose': { je:'ai fait', tu:'as fait', il:'a fait', nous:'avons fait', vous:'avez fait', ils:'ont fait' },
        imparfait: { je:'faisais', tu:'faisais', il:'faisait', nous:'faisions', vous:'faisiez', ils:'faisaient' },
        'futur-proche': { je:'vais faire', tu:'vas faire', il:'va faire', nous:'allons faire', vous:'allez faire', ils:'vont faire' },
        'futur-simple': { je:'ferai', tu:'feras', il:'fera', nous:'ferons', vous:'ferez', ils:'feront' },
        'conditionnel-present': { je:'ferais', tu:'ferais', il:'ferait', nous:'ferions', vous:'feriez', ils:'feraient' }
    },
    'dire': {
        infinitive: 'dire',
        present: { je:'dis', tu:'dis', il:'dit', nous:'disons', vous:'dites', ils:'disent' },
        'passe-compose': { je:'ai dit', tu:'as dit', il:'a dit', nous:'avons dit', vous:'avez dit', ils:'ont dit' },
        imparfait: { je:'disais', tu:'disais', il:'disait', nous:'disions', vous:'disiez', ils:'disaient' },
        'futur-proche': { je:'vais dire', tu:'vas dire', il:'va dire', nous:'allons dire', vous:'allez dire', ils:'vont dire' },
        'futur-simple': { je:'dirai', tu:'diras', il:'dira', nous:'dirons', vous:'direz', ils:'diront' },
        'conditionnel-present': { je:'dirais', tu:'dirais', il:'dirait', nous:'dirions', vous:'diriez', ils:'diraient' }
    },
    'pouvoir': {
        infinitive: 'pouvoir',
        present: { je:'peux', tu:'peux', il:'peut', nous:'pouvons', vous:'pouvez', ils:'peuvent' },
        'passe-compose': { je:'ai pu', tu:'as pu', il:'a pu', nous:'avons pu', vous:'avez pu', ils:'ont pu' },
        imparfait: { je:'pouvais', tu:'pouvais', il:'pouvait', nous:'pouvions', vous:'pouviez', ils:'pouvaient' },
        'futur-proche': { je:'vais pouvoir', tu:'vas pouvoir', il:'va pouvoir', nous:'allons pouvoir', vous:'allez pouvoir', ils:'vont pouvoir' },
        'futur-simple': { je:'pourrai', tu:'pourras', il:'pourra', nous:'pourrons', vous:'pourrez', ils:'pourront' },
        'conditionnel-present': { je:'pourrais', tu:'pourrais', il:'pourrait', nous:'pourrions', vous:'pourriez', ils:'pourraient' }
    },
    'vouloir': {
        infinitive: 'vouloir',
        present: { je:'veux', tu:'veux', il:'veut', nous:'voulons', vous:'voulez', ils:'veulent' },
        'passe-compose': { je:'ai voulu', tu:'as voulu', il:'a voulu', nous:'avons voulu', vous:'avez voulu', ils:'ont voulu' },
        imparfait: { je:'voulais', tu:'voulais', il:'voulait', nous:'voulions', vous:'vouliez', ils:'voulaient' },
        'futur-proche': { je:'vais vouloir', tu:'vas vouloir', il:'va vouloir', nous:'allons vouloir', vous:'allez vouloir', ils:'vont vouloir' },
        'futur-simple': { je:'voudrai', tu:'voudras', il:'voudra', nous:'voudrons', vous:'voudrez', ils:'voudront' },
        'conditionnel-present': { je:'voudrais', tu:'voudrais', il:'voudrait', nous:'voudrions', vous:'voudriez', ils:'voudraient' }
    },
    'devoir': {
        infinitive: 'devoir',
        present: { je:'dois', tu:'dois', il:'doit', nous:'devons', vous:'devez', ils:'doivent' },
        'passe-compose': { je:'ai dû', tu:'as dû', il:'a dû', nous:'avons dû', vous:'avez dû', ils:'ont dû' },
        imparfait: { je:'devais', tu:'devais', il:'devait', nous:'devions', vous:'deviez', ils:'devaient' },
        'futur-proche': { je:'vais devoir', tu:'vas devoir', il:'va devoir', nous:'allons devoir', vous:'allez devoir', ils:'vont devoir' },
        'futur-simple': { je:'devrai', tu:'devras', il:'devra', nous:'devrons', vous:'devrez', ils:'devront' },
        'conditionnel-present': { je:'devrais', tu:'devrais', il:'devrait', nous:'devrions', vous:'devriez', ils:'devraient' }
    },
    'savoir': {
        infinitive: 'savoir',
        present: { je:'sais', tu:'sais', il:'sait', nous:'savons', vous:'savez', ils:'savent' },
        'passe-compose': { je:'ai su', tu:'as su', il:'a su', nous:'avons su', vous:'avez su', ils:'ont su' },
        imparfait: { je:'savais', tu:'savais', il:'savait', nous:'savions', vous:'saviez', ils:'savaient' },
        'futur-proche': { je:'vais savoir', tu:'vas savoir', il:'va savoir', nous:'allons savoir', vous:'allez savoir', ils:'vont savoir' },
        'futur-simple': { je:'saurai', tu:'sauras', il:'saura', nous:'saurons', vous:'saurez', ils:'sauront' },
        'conditionnel-present': { je:'saurais', tu:'saurais', il:'saurait', nous:'saurions', vous:'sauriez', ils:'sauraient' }
    },
    'voir': {
        infinitive: 'voir',
        present: { je:'vois', tu:'vois', il:'voit', nous:'voyons', vous:'voyez', ils:'voient' },
        'passe-compose': { je:'ai vu', tu:'as vu', il:'a vu', nous:'avons vu', vous:'avez vu', ils:'ont vu' },
        imparfait: { je:'voyais', tu:'voyais', il:'voyait', nous:'voyions', vous:'voyiez', ils:'voyaient' },
        'futur-proche': { je:'vais voir', tu:'vas voir', il:'va voir', nous:'allons voir', vous:'allez voir', ils:'vont voir' },
        'futur-simple': { je:'verrai', tu:'verras', il:'verra', nous:'verrons', vous:'verrez', ils:'verront' },
        'conditionnel-present': { je:'verrais', tu:'verrais', il:'verrait', nous:'verrions', vous:'verriez', ils:'verraient' }
    },
    'prendre': {
        infinitive: 'prendre',
        present: { je:'prends', tu:'prends', il:'prend', nous:'prenons', vous:'prenez', ils:'prennent' },
        'passe-compose': { je:'ai pris', tu:'as pris', il:'a pris', nous:'avons pris', vous:'avez pris', ils:'ont pris' },
        imparfait: { je:'prenais', tu:'prenais', il:'prenait', nous:'prenions', vous:'preniez', ils:'prenaient' },
        'futur-proche': { je:'vais prendre', tu:'vas prendre', il:'va prendre', nous:'allons prendre', vous:'allez prendre', ils:'vont prendre' },
        'futur-simple': { je:'prendrai', tu:'prendras', il:'prendra', nous:'prendrons', vous:'prendrez', ils:'prendront' },
        'conditionnel-present': { je:'prendrais', tu:'prendrais', il:'prendrait', nous:'prendrions', vous:'prendriez', ils:'prendraient' }
    },
    'mettre': {
        infinitive: 'mettre',
        present: { je:'mets', tu:'mets', il:'met', nous:'mettons', vous:'mettez', ils:'mettent' },
        'passe-compose': { je:'ai mis', tu:'as mis', il:'a mis', nous:'avons mis', vous:'avez mis', ils:'ont mis' },
        imparfait: { je:'mettais', tu:'mettais', il:'mettait', nous:'mettions', vous:'mettiez', ils:'mettaient' },
        'futur-proche': { je:'vais mettre', tu:'vas mettre', il:'va mettre', nous:'allons mettre', vous:'allez mettre', ils:'vont mettre' },
        'futur-simple': { je:'mettrai', tu:'mettras', il:'mettra', nous:'mettrons', vous:'mettrez', ils:'mettront' },
        'conditionnel-present': { je:'mettrais', tu:'mettrais', il:'mettrait', nous:'mettrions', vous:'mettriez', ils:'mettraient' }
    },
    'écrire': {
        infinitive: 'écrire',
        present: { je:'écris', tu:'écris', il:'écrit', nous:'écrivons', vous:'écrivez', ils:'écrivent' },
        'passe-compose': { je:'ai écrit', tu:'as écrit', il:'a écrit', nous:'avons écrit', vous:'avez écrit', ils:'ont écrit' },
        imparfait: { je:'écrivais', tu:'écrivais', il:'écrivait', nous:'écrivions', vous:'écriviez', ils:'écrivaient' },
        'futur-proche': { je:'vais écrire', tu:'vas écrire', il:'va écrire', nous:'allons écrire', vous:'allez écrire', ils:'vont écrire' },
        'futur-simple': { je:'écrirai', tu:'écriras', il:'écrira', nous:'écrirons', vous:'écrirez', ils:'écriront' },
        'conditionnel-present': { je:'écrirais', tu:'écrirais', il:'écrirait', nous:'écririons', vous:'écririez', ils:'écriraient' }
    },
    'lire': {
        infinitive: 'lire',
        present: { je:'lis', tu:'lis', il:'lit', nous:'lisons', vous:'lisez', ils:'lisent' },
        'passe-compose': { je:'ai lu', tu:'as lu', il:'a lu', nous:'avons lu', vous:'avez lu', ils:'ont lu' },
        imparfait: { je:'lisais', tu:'lisais', il:'lisait', nous:'lisions', vous:'lisiez', ils:'lisaient' },
        'futur-proche': { je:'vais lire', tu:'vas lire', il:'va lire', nous:'allons lire', vous:'allez lire', ils:'vont lire' },
        'futur-simple': { je:'lirai', tu:'liras', il:'lira', nous:'lirons', vous:'lirez', ils:'liront' },
        'conditionnel-present': { je:'lirais', tu:'lirais', il:'lirait', nous:'lirions', vous:'liriez', ils:'liraient' }
    },
    'connaître': {
        infinitive: 'connaître',
        present: { je:'connais', tu:'connais', il:'connaît', nous:'connaissons', vous:'connaissez', ils:'connaissent' },
        'passe-compose': { je:'ai connu', tu:'as connu', il:'a connu', nous:'avons connu', vous:'avez connu', ils:'ont connu' },
        imparfait: { je:'connaissais', tu:'connaissais', il:'connaissait', nous:'connaissions', vous:'connaissiez', ils:'connaissaient' },
        'futur-proche': { je:'vais connaître', tu:'vas connaître', il:'va connaître', nous:'allons connaître', vous:'allez connaître', ils:'vont connaître' },
        'futur-simple': { je:'connaîtrai', tu:'connaîtras', il:'connaîtra', nous:'connaîtrons', vous:'connaîtrez', ils:'connaîtront' },
        'conditionnel-present': { je:'connaîtrais', tu:'connaîtrais', il:'connaîtrait', nous:'connaîtrions', vous:'connaîtriez', ils:'connaîtraient' }
    },
    'vivre': {
        infinitive: 'vivre',
        present: { je:'vis', tu:'vis', il:'vit', nous:'vivons', vous:'vivez', ils:'vivent' },
        'passe-compose': { je:'ai vécu', tu:'as vécu', il:'a vécu', nous:'avons vécu', vous:'avez vécu', ils:'ont vécu' },
        imparfait: { je:'vivais', tu:'vivais', il:'vivait', nous:'vivions', vous:'viviez', ils:'vivaient' },
        'futur-proche': { je:'vais vivre', tu:'vas vivre', il:'va vivre', nous:'allons vivre', vous:'allez vivre', ils:'vont vivre' },
        'futur-simple': { je:'vivrai', tu:'vivras', il:'vivra', nous:'vivrons', vous:'vivrez', ils:'vivront' },
        'conditionnel-present': { je:'vivrais', tu:'vivrais', il:'vivrait', nous:'vivrions', vous:'vivriez', ils:'vivraient' }
    },
    'tenir': {
        infinitive: 'tenir',
        present: { je:'tiens', tu:'tiens', il:'tient', nous:'tenons', vous:'tenez', ils:'tiennent' },
        'passe-compose': { je:'ai tenu', tu:'as tenu', il:'a tenu', nous:'avons tenu', vous:'avez tenu', ils:'ont tenu' },
        imparfait: { je:'tenais', tu:'tenais', il:'tenait', nous:'tenions', vous:'teniez', ils:'tenaient' },
        'futur-proche': { je:'vais tenir', tu:'vas tenir', il:'va tenir', nous:'allons tenir', vous:'allez tenir', ils:'vont tenir' },
        'futur-simple': { je:'tiendrai', tu:'tiendras', il:'tiendra', nous:'tiendrons', vous:'tiendrez', ils:'tiendront' },
        'conditionnel-present': { je:'tiendrais', tu:'tiendrais', il:'tiendrait', nous:'tiendrions', vous:'tiendriez', ils:'tiendraient' }
    },
    'recevoir': {
        infinitive: 'recevoir',
        present: { je:'reçois', tu:'reçois', il:'reçoit', nous:'recevons', vous:'recevez', ils:'reçoivent' },
        'passe-compose': { je:'ai reçu', tu:'as reçu', il:'a reçu', nous:'avons reçu', vous:'avez reçu', ils:'ont reçu' },
        imparfait: { je:'recevais', tu:'recevais', il:'recevait', nous:'recevions', vous:'receviez', ils:'recevaient' },
        'futur-proche': { je:'vais recevoir', tu:'vas recevoir', il:'va recevoir', nous:'allons recevoir', vous:'allez recevoir', ils:'vont recevoir' },
        'futur-simple': { je:'recevrai', tu:'recevras', il:'recevra', nous:'recevrons', vous:'recevrez', ils:'recevront' },
        'conditionnel-present': { je:'recevrais', tu:'recevrais', il:'recevrait', nous:'recevrions', vous:'recevriez', ils:'recevraient' }
    },
    'ouvrir': {
        infinitive: 'ouvrir',
        present: { je:'ouvre', tu:'ouvres', il:'ouvre', nous:'ouvrons', vous:'ouvrez', ils:'ouvrent' },
        'passe-compose': { je:'ai ouvert', tu:'as ouvert', il:'a ouvert', nous:'avons ouvert', vous:'avez ouvert', ils:'ont ouvert' },
        imparfait: { je:'ouvrais', tu:'ouvrais', il:'ouvrait', nous:'ouvrions', vous:'ouvriez', ils:'ouvraient' },
        'futur-proche': { je:'vais ouvrir', tu:'vas ouvrir', il:'va ouvrir', nous:'allons ouvrir', vous:'allez ouvrir', ils:'vont ouvrir' },
        'futur-simple': { je:'ouvrirai', tu:'ouvriras', il:'ouvrira', nous:'ouvrirons', vous:'ouvrirez', ils:'ouvriront' },
        'conditionnel-present': { je:'ouvrirais', tu:'ouvrirais', il:'ouvrirait', nous:'ouvririons', vous:'ouvririez', ils:'ouvriraient' }
    },
    'courir': {
        infinitive: 'courir',
        present: { je:'cours', tu:'cours', il:'court', nous:'courons', vous:'courez', ils:'courent' },
        'passe-compose': { je:'ai couru', tu:'as couru', il:'a couru', nous:'avons couru', vous:'avez couru', ils:'ont couru' },
        imparfait: { je:'courais', tu:'courais', il:'courait', nous:'courions', vous:'couriez', ils:'couraient' },
        'futur-proche': { je:'vais courir', tu:'vas courir', il:'va courir', nous:'allons courir', vous:'allez courir', ils:'vont courir' },
        'futur-simple': { je:'courrai', tu:'courras', il:'courra', nous:'courrons', vous:'courrez', ils:'courront' },
        'conditionnel-present': { je:'courrais', tu:'courrais', il:'courrait', nous:'courrions', vous:'courriez', ils:'courraient' }
    },
    'boire': {
        infinitive: 'boire',
        present: { je:'bois', tu:'bois', il:'boit', nous:'buvons', vous:'buvez', ils:'boivent' },
        'passe-compose': { je:'ai bu', tu:'as bu', il:'a bu', nous:'avons bu', vous:'avez bu', ils:'ont bu' },
        imparfait: { je:'buvais', tu:'buvais', il:'buvait', nous:'buvions', vous:'buviez', ils:'buvaient' },
        'futur-proche': { je:'vais boire', tu:'vas boire', il:'va boire', nous:'allons boire', vous:'allez boire', ils:'vont boire' },
        'futur-simple': { je:'boirai', tu:'boiras', il:'boira', nous:'boirons', vous:'boirez', ils:'boiront' },
        'conditionnel-present': { je:'boirais', tu:'boirais', il:'boirait', nous:'boirions', vous:'boiriez', ils:'boiraient' }
    },
    'croire': {
        infinitive: 'croire',
        present: { je:'crois', tu:'crois', il:'croit', nous:'croyons', vous:'croyez', ils:'croient' },
        'passe-compose': { je:'ai cru', tu:'as cru', il:'a cru', nous:'avons cru', vous:'avez cru', ils:'ont cru' },
        imparfait: { je:'croyais', tu:'croyais', il:'croyait', nous:'croyions', vous:'croyiez', ils:'croyaient' },
        'futur-proche': { je:'vais croire', tu:'vas croire', il:'va croire', nous:'allons croire', vous:'allez croire', ils:'vont croire' },
        'futur-simple': { je:'croirai', tu:'croiras', il:'croira', nous:'croirons', vous:'croirez', ils:'croiront' },
        'conditionnel-present': { je:'croirais', tu:'croirais', il:'croirait', nous:'croirions', vous:'croiriez', ils:'croiraient' }
    },
    'falloir': {
        infinitive: 'falloir',
        present: { je:'faux', tu:'faux', il:'faut', nous:'fallons', vous:'fallez', ils:'fautent' },
        'passe-compose': { je:'ai fallu', tu:'as fallu', il:'a fallu', nous:'avons fallu', vous:'avez fallu', ils:'ont fallu' },
        imparfait: { je:'fallais', tu:'fallais', il:'fallait', nous:'fallions', vous:'falliez', ils:'fallaient' },
        'futur-proche': { je:'vais falloir', tu:'vas falloir', il:'va falloir', nous:'allons falloir', vous:'allez falloir', ils:'vont falloir' },
        'futur-simple': { je:'faudrai', tu:'faudras', il:'faudra', nous:'faudrons', vous:'faudrez', ils:'faudront' },
        'conditionnel-present': { je:'faudrais', tu:'faudrais', il:'faudrait', nous:'faudrions', vous:'faudriez', ils:'faudraient' }
    },
    'suivre': {
        infinitive: 'suivre',
        present: { je:'suis', tu:'suis', il:'suit', nous:'suivons', vous:'suivez', ils:'suivent' },
        'passe-compose': { je:'ai suivi', tu:'as suivi', il:'a suivi', nous:'avons suivi', vous:'avez suivi', ils:'ont suivi' },
        imparfait: { je:'suivais', tu:'suivais', il:'suivait', nous:'suivions', vous:'suiviez', ils:'suivaient' },
        'futur-proche': { je:'vais suivre', tu:'vas suivre', il:'va suivre', nous:'allons suivre', vous:'allez suivre', ils:'vont suivre' },
        'futur-simple': { je:'suivrai', tu:'suivras', il:'suivra', nous:'suivrons', vous:'suivrez', ils:'suivront' },
        'conditionnel-present': { je:'suivrais', tu:'suivrais', il:'suivrait', nous:'suivrions', vous:'suivriez', ils:'suivraient' }
    },
    'apprendre': {
        infinitive: 'apprendre',
        present: { je:'apprends', tu:'apprends', il:'apprend', nous:'apprenons', vous:'apprenez', ils:'apprennent' },
        'passe-compose': { je:'ai appris', tu:'as appris', il:'a appris', nous:'avons appris', vous:'avez appris', ils:'ont appris' },
        imparfait: { je:'apprenais', tu:'apprenais', il:'apprenait', nous:'apprenions', vous:'appreniez', ils:'apprenaient' },
        'futur-proche': { je:'vais apprendre', tu:'vas apprendre', il:'va apprendre', nous:'allons apprendre', vous:'allez apprendre', ils:'vont apprendre' },
        'futur-simple': { je:'apprendrai', tu:'apprendras', il:'apprendra', nous:'apprendrons', vous:'apprendrez', ils:'apprendront' },
        'conditionnel-present': { je:'apprendrais', tu:'apprendrais', il:'apprendrait', nous:'apprendrions', vous:'apprendriez', ils:'apprendraient' }
    },
    'comprendre': {
        infinitive: 'comprendre',
        present: { je:'comprends', tu:'comprends', il:'comprend', nous:'comprenons', vous:'comprenez', ils:'comprennent' },
        'passe-compose': { je:'ai compris', tu:'as compris', il:'a compris', nous:'avons compris', vous:'avez compris', ils:'ont compris' },
        imparfait: { je:'comprenais', tu:'comprenais', il:'comprenait', nous:'comprenions', vous:'compreniez', ils:'comprenaient' },
        'futur-proche': { je:'vais comprendre', tu:'vas comprendre', il:'va comprendre', nous:'allons comprendre', vous:'allez comprendre', ils:'vont comprendre' },
        'futur-simple': { je:'comprendrai', tu:'comprendras', il:'comprendra', nous:'comprendrons', vous:'comprendrez', ils:'comprendront' },
        'conditionnel-present': { je:'comprendrais', tu:'comprendrais', il:'comprendrait', nous:'comprendrions', vous:'comprendriez', ils:'comprendraient' }
    },
    'sourire': {
        infinitive: 'sourire',
        present: { je:'souris', tu:'souris', il:'sourit', nous:'sourions', vous:'souriez', ils:'sourient' },
        'passe-compose': { je:'ai souri', tu:'as souri', il:'a souri', nous:'avons souri', vous:'avez souri', ils:'ont souri' },
        imparfait: { je:'souriais', tu:'souriais', il:'souriait', nous:'souriions', vous:'souriiez', ils:'souriaient' },
        'futur-proche': { je:'vais sourire', tu:'vas sourire', il:'va sourire', nous:'allons sourire', vous:'allez sourire', ils:'vont sourire' },
        'futur-simple': { je:'sourirai', tu:'souriras', il:'sourira', nous:'sourirons', vous:'sourirez', ils:'souriront' },
        'conditionnel-present': { je:'sourirais', tu:'sourirais', il:'sourirait', nous:'souririons', vous:'souririez', ils:'souriraient' }
    },
    'plaindre': {
        infinitive: 'plaindre',
        present: { je:'plains', tu:'plains', il:'plaint', nous:'plaignons', vous:'plaignez', ils:'plaignent' },
        'passe-compose': { je:'ai plaint', tu:'as plaint', il:'a plaint', nous:'avons plaint', vous:'avez plaint', ils:'ont plaint' },
        imparfait: { je:'plaignais', tu:'plaignais', il:'plaignait', nous:'plaignions', vous:'plaigniez', ils:'plaignaient' },
        'futur-proche': { je:'vais plaindre', tu:'vas plaindre', il:'va plaindre', nous:'allons plaindre', vous:'allez plaindre', ils:'vont plaindre' },
        'futur-simple': { je:'plaindrai', tu:'plaindras', il:'plaindra', nous:'plaindrons', vous:'plaindrez', ils:'plaindront' },
        'conditionnel-present': { je:'plaindrais', tu:'plaindrais', il:'plaindrait', nous:'plaindrions', vous:'plaindriez', ils:'plaindraient' }
    },
    'plaire': {
        infinitive: 'plaire',
        present: { je:'plais', tu:'plais', il:'plaît', nous:'plaisons', vous:'plaisez', ils:'plaisent' },
        'passe-compose': { je:'ai plu', tu:'as plu', il:'a plu', nous:'avons plu', vous:'avez plu', ils:'ont plu' },
        imparfait: { je:'plaisais', tu:'plaisais', il:'plaisait', nous:'plaisions', vous:'plaisiez', ils:'plaisaient' },
        'futur-proche': { je:'vais plaire', tu:'vas plaire', il:'va plaire', nous:'allons plaire', vous:'allez plaire', ils:'vont plaire' },
        'futur-simple': { je:'plairai', tu:'plairas', il:'plaira', nous:'plairons', vous:'plairez', ils:'plairont' },
        'conditionnel-present': { je:'plairais', tu:'plairais', il:'plairait', nous:'plairions', vous:'plairiez', ils:'plairaient' }
    },
    'paraître': {
    infinitive: 'paraître',
    present: { je:'parais', tu:'parais', il:'paraît', nous:'paraissons', vous:'paraissez', ils:'paraissent' },
    'passe-compose': { je:'ai paru', tu:'as paru', il:'a paru', nous:'avons paru', vous:'avez paru', ils:'ont paru' },
    imparfait: { je:'paraissais', tu:'paraissais', il:'paraissait', nous:'paraissions', vous:'paraissiez', ils:'paraissaient' },
    'futur-proche': { je:'vais paraître', tu:'vas paraître', il:'va paraître', nous:'allons paraître', vous:'allez paraître', ils:'vont paraître' },
    'futur-simple': { je:'paraîtrai', tu:'paraîtras', il:'paraîtra', nous:'paraîtrons', vous:'paraîtrez', ils:'paraîtront' },
    'conditionnel-present': { je:'paraîtrais', tu:'paraîtrais', il:'paraîtrait', nous:'paraîtrions', vous:'paraîtriez', ils:'paraîtraient' }
    },
    'apparaître': {
    infinitive: 'apparaître',
    present: { je:'apparais', tu:'apparais', il:'apparaît', nous:'apparaissons', vous:'apparaissez', ils:'apparaissent' },
    'passe-compose': { je:'ai apparu', tu:'as apparu', il:'a apparu', nous:'avons apparu', vous:'avez apparu', ils:'ont apparu' },
    imparfait: { je:'apparaissais', tu:'apparaissais', il:'apparaissait', nous:'apparaissions', vous:'apparaissiez', ils:'apparaissaient' },
    'futur-proche': { je:'vais apparaître', tu:'vas apparaître', il:'va apparaître', nous:'allons apparaître', vous:'allez apparaître', ils:'vont apparaître' },
    'futur-simple': { je:'apparaîtrai', tu:'apparaîtras', il:'apparaîtra', nous:'apparaîtrons', vous:'apparaîtrez', ils:'apparaîtront' },
    'conditionnel-present': { je:'apparaîtrais', tu:'apparaîtrais', il:'apparaîtrait', nous:'apparaîtrions', vous:'apparaîtriez', ils:'apparaîtraient' }
    },
    'disparaître': {
    infinitive: 'disparaître',
    present: { je:'disparais', tu:'disparais', il:'disparaît', nous:'disparaissons', vous:'disparaissez', ils:'disparaissent' },
    'passe-compose': { je:'ai disparu', tu:'as disparu', il:'a disparu', nous:'avons disparu', vous:'avez disparu', ils:'ont disparu' },
    imparfait: { je:'disparaissais', tu:'disparaissais', il:'disparaissait', nous:'disparaissions', vous:'disparaissiez', ils:'disparaissaient' },
    'futur-proche': { je:'vais disparaître', tu:'vas disparaître', il:'va disparaître', nous:'allons disparaître', vous:'allez disparaître', ils:'vont disparaître' },
    'futur-simple': { je:'disparaîtrai', tu:'disparaîtras', il:'disparaîtra', nous:'disparaîtrons', vous:'disparaîtrez', ils:'disparaîtront' },
    'conditionnel-present': { je:'disparaîtrais', tu:'disparaîtrais', il:'disparaîtrait', nous:'disparaîtrions', vous:'disparaîtriez', ils:'disparaîtraient' }
    },
    'conduire': {
    infinitive: 'conduire',
    present: { je:'conduis', tu:'conduis', il:'conduit', nous:'conduisons', vous:'conduisez', ils:'conduisent' },
    'passe-compose': { je:'ai conduit', tu:'as conduit', il:'a conduit', nous:'avons conduit', vous:'avez conduit', ils:'ont conduit' },
    imparfait: { je:'conduisais', tu:'conduisais', il:'conduisait', nous:'conduisions', vous:'conduisiez', ils:'conduisaient' },
    'futur-proche': { je:'vais conduire', tu:'vas conduire', il:'va conduire', nous:'allons conduire', vous:'allez conduire', ils:'vont conduire' },
    'futur-simple': { je:'conduirai', tu:'conduiras', il:'conduira', nous:'conduirons', vous:'conduirez', ils:'conduiront' },
    'conditionnel-present': { je:'conduirais', tu:'conduirais', il:'conduirait', nous:'conduirions', vous:'conduiriez', ils:'conduiraient' }
    },
    'construire': {
    infinitive: 'construire',
    present: { je:'construis', tu:'construis', il:'construit', nous:'construisons', vous:'construisez', ils:'construisent' },
    'passe-compose': { je:'ai construit', tu:'as construit', il:'a construit', nous:'avons construit', vous:'avez construit', ils:'ont construit' },
    imparfait: { je:'construisais', tu:'construisais', il:'construisait', nous:'construisions', vous:'construisiez', ils:'construisaient' },
    'futur-proche': { je:'vais construire', tu:'vas construire', il:'va construire', nous:'allons construire', vous:'allez construire', ils:'vont construire' },
    'futur-simple': { je:'construirai', tu:'construiras', il:'construira', nous:'construirons', vous:'construirez', ils:'construiront' },
    'conditionnel-present': { je:'construirais', tu:'construirais', il:'construirait', nous:'construirions', vous:'construiriez', ils:'construiraient' }
    },
    'traduire': {
    infinitive: 'traduire',
    present: { je:'traduis', tu:'traduis', il:'traduit', nous:'traduisons', vous:'traduisez', ils:'traduisent' },
    'passe-compose': { je:'ai traduit', tu:'as traduit', il:'a traduit', nous:'avons traduit', vous:'avez traduit', ils:'ont traduit' },
    imparfait: { je:'traduisais', tu:'traduisais', il:'traduisait', nous:'traduisions', vous:'traduisiez', ils:'traduisaient' },
    'futur-proche': { je:'vais traduire', tu:'vas traduire', il:'va traduire', nous:'allons traduire', vous:'allez traduire', ils:'vont traduire' },
    'futur-simple': { je:'traduirai', tu:'traduiras', il:'traduira', nous:'traduirons', vous:'traduirez', ils:'traduiront' },
    'conditionnel-present': { je:'traduirais', tu:'traduirais', il:'traduirait', nous:'traduirions', vous:'traduiriez', ils:'traduiraient' }
    },
    'coudre': {
    infinitive: 'coudre',
    present: { je:'couds', tu:'couds', il:'coud', nous:'cousons', vous:'cousez', ils:'cousent' },
    'passe-compose': { je:'ai cousu', tu:'as cousu', il:'a cousu', nous:'avons cousu', vous:'avez cousu', ils:'ont cousu' },
    imparfait: { je:'cousais', tu:'cousais', il:'cousait', nous:'cousions', vous:'cousiez', ils:'cousaient' },
    'futur-proche': { je:'vais coudre', tu:'vas coudre', il:'va coudre', nous:'allons coudre', vous:'allez coudre', ils:'vont coudre' },
    'futur-simple': { je:'coudrai', tu:'coudras', il:'coudra', nous:'coudrons', vous:'coudrez', ils:'coudront' },
    'conditionnel-present': { je:'coudrais', tu:'coudrais', il:'coudrait', nous:'coudrions', vous:'coudriez', ils:'coudraient' }
    },
    'asseoir': {
    infinitive: 'asseoir',
    present: { je:'assieds', tu:'assieds', il:'assied', nous:'asseyons', vous:'asseyez', ils:'asseyent' },
    'passe-compose': { je:'ai assis', tu:'as assis', il:'a assis', nous:'avons assis', vous:'avez assis', ils:'ont assis' },
    imparfait: { je:'asseyais', tu:'asseyais', il:'asseyait', nous:'asseyions', vous:'asseyiez', ils:'asseyaient' },
    'futur-proche': { je:'vais asseoir', tu:'vas asseoir', il:'va asseoir', nous:'allons asseoir', vous:'allez asseoir', ils:'vont asseoir' },
    'futur-simple': { je:'assiérai', tu:'assiéras', il:'assiéra', nous:'assiérons', vous:'assiérez', ils:'assiéront' },
    'conditionnel-present': { je:'assiérais', tu:'assiérais', il:'assiérait', nous:'assiérions', vous:'assiériez', ils:'assiéraient' }
    },
    'battre': {
    infinitive: 'battre',
    present: { je:'bats', tu:'bats', il:'bat', nous:'battons', vous:'battez', ils:'battent' },
    'passe-compose': { je:'ai battu', tu:'as battu', il:'a battu', nous:'avons battu', vous:'avez battu', ils:'ont battu' },
    imparfait: { je:'battais', tu:'battais', il:'battait', nous:'battions', vous:'battiez', ils:'battaient' },
    'futur-proche': { je:'vais battre', tu:'vas battre', il:'va battre', nous:'allons battre', vous:'allez battre', ils:'vont battre' },
    'futur-simple': { je:'battrai', tu:'battras', il:'battra', nous:'battrons', vous:'battrez', ils:'battront' },
    'conditionnel-present': { je:'battrais', tu:'battrais', il:'battrait', nous:'battrions', vous:'battriez', ils:'battraient' }
    },
    'confire': {
    infinitive: 'confire',
    present: { je:'confis', tu:'confis', il:'confit', nous:'confisons', vous:'confisez', ils:'confisent' },
    'passe-compose': { je:'ai confit', tu:'as confit', il:'a confit', nous:'avons confit', vous:'avez confit', ils:'ont confit' },
    imparfait: { je:'confisais', tu:'confisais', il:'confisait', nous:'confisions', vous:'confisiez', ils:'confisaient' },
    'futur-proche': { je:'vais confire', tu:'vas confire', il:'va confire', nous:'allons confire', vous:'allez confire', ils:'vont confire' },
    'futur-simple': { je:'confirai', tu:'confiras', il:'confira', nous:'confirons', vous:'confirez', ils:'confiront' },
    'conditionnel-present': { je:'confirais', tu:'confirais', il:'confirait', nous:'confirions', vous:'confiriez', ils:'confiraient' }
    },
    'décrire': {
    infinitive: 'décrire',
    present: { je:'décris', tu:'décris', il:'décrit', nous:'décrivons', vous:'décrivez', ils:'décrivent' },
    'passe-compose': { je:'ai décrit', tu:'as décrit', il:'a décrit', nous:'avons décrit', vous:'avez décrit', ils:'ont décrit' },
    imparfait: { je:'décrivais', tu:'décrivais', il:'décrivait', nous:'décrivions', vous:'décriviez', ils:'décrivaient' },
    'futur-proche': { je:'vais décrire', tu:'vas décrire', il:'va décrire', nous:'allons décrire', vous:'allez décrire', ils:'vont décrire' },
    'futur-simple': { je:'décrirai', tu:'décriras', il:'décrira', nous:'décrirons', vous:'décrirez', ils:'décriront' },
    'conditionnel-present': { je:'décrirais', tu:'décrirais', il:'décrirait', nous:'décririons', vous:'décririez', ils:'décriraient' }
    },
    'promettre': {
    infinitive: 'promettre',
    present: { je:'promets', tu:'promets', il:'promet', nous:'promettons', vous:'promettez', ils:'promettent' },
    'passe-compose': { je:'ai promis', tu:'as promis', il:'a promis', nous:'avons promis', vous:'avez promis', ils:'ont promis' },
    imparfait: { je:'promettais', tu:'promettais', il:'promettait', nous:'promettions', vous:'promettiez', ils:'promettaient' },
    'futur-proche': { je:'vais promettre', tu:'vas promettre', il:'va promettre', nous:'allons promettre', vous:'allez promettre', ils:'vont promettre' },
    'futur-simple': { je:'promettrai', tu:'promettras', il:'promettra', nous:'promettrons', vous:'promettrez', ils:'promettront' },
    'conditionnel-present': { je:'promettrais', tu:'promettrais', il:'promettrait', nous:'promettrions', vous:'promettriez', ils:'promettraient' }
    },
    'permettre': {
    infinitive: 'permettre',
    present: { je:'permets', tu:'permets', il:'permet', nous:'permettons', vous:'permettez', ils:'permettent' },
    'passe-compose': { je:'ai permis', tu:'as permis', il:'a permis', nous:'avons permis', vous:'avez permis', ils:'ont permis' },
    imparfait: { je:'permettais', tu:'permettais', il:'permettait', nous:'permettions', vous:'permettiez', ils:'permettaient' },
    'futur-proche': { je:'vais permettre', tu:'vas permettre', il:'va permettre', nous:'allons permettre', vous:'allez permettre', ils:'vont permettre' },
    'futur-simple': { je:'permettrai', tu:'permettras', il:'permettra', nous:'permettrons', vous:'permettrez', ils:'permettront' },
    'conditionnel-present': { je:'permettrais', tu:'permettrais', il:'permettrait', nous:'permettrions', vous:'permettriez', ils:'permettraient' }
    },
    'souffrir': {
    infinitive: 'souffrir',
    present: { je:'souffre', tu:'souffres', il:'souffre', nous:'souffrons', vous:'souffrez', ils:'souffrent' },
    'passe-compose': { je:'ai souffert', tu:'as souffert', il:'a souffert', nous:'avons souffert', vous:'avez souffert', ils:'ont souffert' },
    imparfait: { je:'souffrais', tu:'souffrais', il:'souffrait', nous:'souffrions', vous:'souffriez', ils:'souffraient' },
    'futur-proche': { je:'vais souffrir', tu:'vas souffrir', il:'va souffrir', nous:'allons souffrir', vous:'allez souffrir', ils:'vont souffrir' },
    'futur-simple': { je:'souffrirai', tu:'souffriras', il:'souffrira', nous:'souffrirons', vous:'souffrirez', ils:'souffriront' },
    'conditionnel-present': { je:'souffrirais', tu:'souffrirais', il:'souffrirait', nous:'souffririons', vous:'souffririez', ils:'souffriraient' }
    },
    'offrir': {
    infinitive: 'offrir',
    present: { je:'offre', tu:'offres', il:'offre', nous:'offrons', vous:'offrez', ils:'offrent' },
    'passe-compose': { je:'ai offert', tu:'as offert', il:'a offert', nous:'avons offert', vous:'avez offert', ils:'ont offert' },
    imparfait: { je:'offrais', tu:'offrais', il:'offrait', nous:'offrions', vous:'offriez', ils:'offraient' },
    'futur-proche': { je:'vais offrir', tu:'vas offrir', il:'va offrir', nous:'allons offrir', vous:'allez offrir', ils:'vont offrir' },
    'futur-simple': { je:'offrirai', tu:'offriras', il:'offrira', nous:'offrirons', vous:'offrirez', ils:'offriront' },
    'conditionnel-present': { je:'offrirais', tu:'offrirais', il:'offrirait', nous:'offririons', vous:'offririez', ils:'offriraient' }
    },
    'découvrir': {
    infinitive: 'découvrir',
    present: { je:'découvre', tu:'découvres', il:'découvre', nous:'découvrons', vous:'découvrez', ils:'découvrent' },
    'passe-compose': { je:'ai découvert', tu:'as découvert', il:'a découvert', nous:'avons découvert', vous:'avez découvert', ils:'ont découvert' },
    imparfait: { je:'découvrais', tu:'découvrais', il:'découvrait', nous:'découvrions', vous:'découvriez', ils:'découvraient' },
    'futur-proche': { je:'vais découvrir', tu:'vas découvrir', il:'va découvrir', nous:'allons découvrir', vous:'allez découvrir', ils:'vont découvrir' },
    'futur-simple': { je:'découvrirai', tu:'découvriras', il:'découvrira', nous:'découvrirons', vous:'découvrirez', ils:'découvriront' },
    'conditionnel-present': { je:'découvrirais', tu:'découvrirais', il:'découvrirait', nous:'découvririons', vous:'découvririez', ils:'découvriraient' }
    },
    'couvrir': {
    infinitive: 'couvrir',
    present: { je:'couvre', tu:'couvres', il:'couvre', nous:'couvrons', vous:'couvrez', ils:'couvrent' },
    'passe-compose': { je:'ai couvert', tu:'as couvert', il:'a couvert', nous:'avons couvert', vous:'avez couvert', ils:'ont couvert' },
    imparfait: { je:'couvrais', tu:'couvrais', il:'couvrait', nous:'couvrions', vous:'couvriez', ils:'couvraient' },
    'futur-proche': { je:'vais couvrir', tu:'vas couvrir', il:'va couvrir', nous:'allons couvrir', vous:'allez couvrir', ils:'vont couvrir' },
    'futur-simple': { je:'couvrirai', tu:'couvriras', il:'couvrira', nous:'couvrirons', vous:'couvrirez', ils:'couvriront' },
    'conditionnel-present': { je:'couvrirais', tu:'couvrirais', il:'couvrirait', nous:'couvririons', vous:'couvririez', ils:'couvriraient' }
    },
    'rire': {
    infinitive: 'rire',
    present: { je:'ris', tu:'ris', il:'rit', nous:'rions', vous:'riez', ils:'rient' },
    'passe-compose': { je:'ai ri', tu:'as ri', il:'a ri', nous:'avons ri', vous:'avez ri', ils:'ont ri' },
    imparfait: { je:'riais', tu:'riais', il:'riait', nous:'riions', vous:'riiez', ils:'riaient' },
    'futur-proche': { je:'vais rire', tu:'vas rire', il:'va rire', nous:'allons rire', vous:'allez rire', ils:'vont rire' },
    'futur-simple': { je:'rirai', tu:'riras', il:'rira', nous:'rirons', vous:'rirez', ils:'riront' },
    'conditionnel-present': { je:'rirais', tu:'rirais', il:'rirait', nous:'ririons', vous:'ririez', ils:'riraient' }
    },
    'dormir': {
    infinitive: 'dormir',
    present: { je:'dors', tu:'dors', il:'dort', nous:'dormons', vous:'dormez', ils:'dorment' },
    'passe-compose': { je:'ai dormi', tu:'as dormi', il:'a dormi', nous:'avons dormi', vous:'avez dormi', ils:'ont dormi' },
    imparfait: { je:'dormais', tu:'dormais', il:'dormait', nous:'dormions', vous:'dormiez', ils:'dormaient' },
    'futur-proche': { je:'vais dormir', tu:'vas dormir', il:'va dormir', nous:'allons dormir', vous:'allez dormir', ils:'vont dormir' },
    'futur-simple': { je:'dormirai', tu:'dormiras', il:'dormira', nous:'dormirons', vous:'dormirez', ils:'dormiront' },
    'conditionnel-present': { je:'dormirais', tu:'dormirais', il:'dormirait', nous:'dormirions', vous:'dormiriez', ils:'dormiraient' }
    },
    'servir': {
    infinitive: 'servir',
    present: { je:'sers', tu:'sers', il:'sert', nous:'servons', vous:'servez', ils:'servent' },
    'passe-compose': { je:'ai servi', tu:'as servi', il:'a servi', nous:'avons servi', vous:'avez servi', ils:'ont servi' },
    imparfait: { je:'servais', tu:'servais', il:'servait', nous:'servions', vous:'serviez', ils:'servaient' },
    'futur-proche': { je:'vais servir', tu:'vas servir', il:'va servir', nous:'allons servir', vous:'allez servir', ils:'vont servir' },
    'futur-simple': { je:'servirai', tu:'serviras', il:'servira', nous:'servirons', vous:'servirez', ils:'serviront' },
    'conditionnel-present': { je:'servirais', tu:'servirais', il:'servirait', nous:'servirions', vous:'serviriez', ils:'serviraient' }
    },
    'mentir': {
    infinitive: 'mentir',
    present: { je:'mens', tu:'mens', il:'ment', nous:'mentons', vous:'mentez', ils:'mentent' },
    'passe-compose': { je:'ai menti', tu:'as menti', il:'a menti', nous:'avons menti', vous:'avez menti', ils:'ont menti' },
    imparfait: { je:'mentais', tu:'mentais', il:'mentait', nous:'mentions', vous:'mentiez', ils:'mentaient' },
    'futur-proche': { je:'vais mentir', tu:'vas mentir', il:'va mentir', nous:'allons mentir', vous:'allez mentir', ils:'vont mentir' },
    'futur-simple': { je:'mentirai', tu:'mentiras', il:'mentira', nous:'mentirons', vous:'mentirez', ils:'mentiront' },
    'conditionnel-present': { je:'mentirais', tu:'mentirais', il:'mentirait', nous:'mentirions', vous:'mentiriez', ils:'mentiraient' }
    },
    'sentir': {
    infinitive: 'sentir',
    present: { je:'sens', tu:'sens', il:'sent', nous:'sentons', vous:'sentez', ils:'sentent' },
    'passe-compose': { je:'ai senti', tu:'as senti', il:'a senti', nous:'avons senti', vous:'avez senti', ils:'ont senti' },
    imparfait: { je:'sentais', tu:'sentais', il:'sentait', nous:'sentions', vous:'sentiez', ils:'sentaient' },
    'futur-proche': { je:'vais sentir', tu:'vas sentir', il:'va sentir', nous:'allons sentir', vous:'allez sentir', ils:'vont sentir' },
    'futur-simple': { je:'sentirai', tu:'sentiras', il:'sentira', nous:'sentirons', vous:'sentirez', ils:'sentiront' },
    'conditionnel-present': { je:'sentirais', tu:'sentirais', il:'sentirait', nous:'sentirions', vous:'sentiriez', ils:'sentiraient' }
    },
    'repartir': {
    infinitive: 'repartir',
    present: { je:'repars', tu:'repars', il:'repart', nous:'repartons', vous:'repartez', ils:'repartent' },
    'passe-compose': { je:'suis reparti', tu:'es reparti', il:'est reparti', nous:'sommes repartis', vous:'êtes repartis', ils:'sont repartis' },
    imparfait: { je:'repartais', tu:'repartais', il:'repartait', nous:'repartions', vous:'repartiez', ils:'repartaient' },
    'futur-proche': { je:'vais repartir', tu:'vas repartir', il:'va repartir', nous:'allons repartir', vous:'allez repartir', ils:'vont repartir' },
    'futur-simple': { je:'repartirai', tu:'repartiras', il:'repartira', nous:'repartirons', vous:'repartirez', ils:'repartiront' },
    'conditionnel-present': { je:'repartirais', tu:'repartirais', il:'repartirait', nous:'repartirions', vous:'repartiriez', ils:'repartiraient' }
    },
    'ressortir': {
    infinitive: 'ressortir',
    present: { je:'ressors', tu:'ressors', il:'ressort', nous:'ressortons', vous:'ressortez', ils:'ressortent' },
    'passe-compose': { je:'suis ressorti', tu:'es ressorti', il:'est ressorti', nous:'sommes ressortis', vous:'êtes ressortis', ils:'sont ressortis' },
    imparfait: { je:'ressortais', tu:'ressortais', il:'ressortait', nous:'ressortions', vous:'ressortiez', ils:'ressortaient' },
    'futur-proche': { je:'vais ressortir', tu:'vas ressortir', il:'va ressortir', nous:'allons ressortir', vous:'allez ressortir', ils:'vont ressortir' },
    'futur-simple': { je:'ressortirai', tu:'ressortiras', il:'ressortira', nous:'ressortirons', vous:'ressortirez', ils:'ressortiront' },
    'conditionnel-present': { je:'ressortirais', tu:'ressortirais', il:'ressortirait', nous:'ressortirions', vous:'ressortiriez', ils:'ressortiraient' }
    },
    'endormir': {
    infinitive: 'endormir',
    present: { je:'endors', tu:'endors', il:'endort', nous:'endormons', vous:'endormez', ils:'endorment' },
    'passe-compose': { je:'ai endormi', tu:'as endormi', il:'a endormi', nous:'avons endormi', vous:'avez endormi', ils:'ont endormi' },
    imparfait: { je:'endormais', tu:'endormais', il:'endormait', nous:'endormions', vous:'endormiez', ils:'endormaient' },
    'futur-proche': { je:'vais endormir', tu:'vas endormir', il:'va endormir', nous:'allons endormir', vous:'allez endormir', ils:'vont endormir' },
    'futur-simple': { je:'endormirai', tu:'endormiras', il:'endormira', nous:'endormirons', vous:'endormirez', ils:'endormiront' },
    'conditionnel-present': { je:'endormirais', tu:'endormirais', il:'endormirait', nous:'endormirions', vous:'endormiriez', ils:'endormiraient' }
    },

    /* ==================== REGULAR VERBS ==================== */
    'aimer': {
    infinitive: 'aimer',
    present: { je:'aime', tu:'aimes', il:'aime', nous:'aimons', vous:'aimez', ils:'aiment' },
    'passe-compose': { je:'ai aimé', tu:'as aimé', il:'a aimé', nous:'avons aimé', vous:'avez aimé', ils:'ont aimé' },
    imparfait: { je:'aimais', tu:'aimais', il:'aimait', nous:'aimions', vous:'aimiez', ils:'aimaient' },
    'futur-proche': { je:'vais aimer', tu:'vas aimer', il:'va aimer', nous:'allons aimer', vous:'allez aimer', ils:'vont aimer' },
    'futur-simple': { je:'aimerai', tu:'aimeras', il:'aimera', nous:'aimerons', vous:'aimerez', ils:'aimeront' },
    'conditionnel-present': { je:'aimerais', tu:'aimerais', il:'aimerait', nous:'aimerions', vous:'aimeriez', ils:'aimeraient' }
    },
    'parler': {
    infinitive: 'parler',
    present: { je:'parle', tu:'parles', il:'parle', nous:'parlons', vous:'parlez', ils:'parlent' },
    'passe-compose': { je:'ai parlé', tu:'as parlé', il:'a parlé', nous:'avons parlé', vous:'avez parlé', ils:'ont parlé' },
    imparfait: { je:'parlais', tu:'parlais', il:'parlait', nous:'parlions', vous:'parliez', ils:'parlaient' },
    'futur-proche': { je:'vais parler', tu:'vas parler', il:'va parler', nous:'allons parler', vous:'allez parler', ils:'vont parler' },
    'futur-simple': { je:'parlerai', tu:'parleras', il:'parlera', nous:'parlerons', vous:'parlerez', ils:'parleront' },
    'conditionnel-present': { je:'parlerais', tu:'parlerais', il:'parlerait', nous:'parlerions', vous:'parleriez', ils:'parleraient' }
    },
    'travailler': {
    infinitive: 'travailler',
    present: { je:'travaille', tu:'travailles', il:'travaille', nous:'travaillons', vous:'travaillez', ils:'travaillent' },
    'passe-compose': { je:'ai travaillé', tu:'as travaillé', il:'a travaillé', nous:'avons travaillé', vous:'avez travaillé', ils:'ont travaillé' },
    imparfait: { je:'travaillais', tu:'travaillais', il:'travaillait', nous:'travaillions', vous:'travailliez', ils:'travaillaient' },
    'futur-proche': { je:'vais travailler', tu:'vas travailler', il:'va travailler', nous:'allons travailler', vous:'allez travailler', ils:'vont travailler' },
    'futur-simple': { je:'travaillerai', tu:'travailleras', il:'travaillera', nous:'travaillerons', vous:'travaillerez', ils:'travailleront' },
    'conditionnel-present': { je:'travaillerais', tu:'travaillerais', il:'travaillerait', nous:'travaillerions', vous:'travailleriez', ils:'travailleraient' }
    },
    'étudier': {
    infinitive: 'étudier',
    present: { je:'étudie', tu:'étudies', il:'étudie', nous:'étudions', vous:'étudiez', ils:'étudient' },
    'passe-compose': { je:'ai étudié', tu:'as étudié', il:'a étudié', nous:'avons étudié', vous:'avez étudié', ils:'ont étudié' },
    imparfait: { je:'étudiais', tu:'étudiais', il:'étudiait', nous:'étudiions', vous:'étudiiez', ils:'étudiaient' },
    'futur-proche': { je:'vais étudier', tu:'vas étudier', il:'va étudier', nous:'allons étudier', vous:'allez étudier', ils:'vont étudier' },
    'futur-simple': { je:'étudierai', tu:'étudieras', il:'étudiera', nous:'étudierons', vous:'étudierez', ils:'étudieront' },
    'conditionnel-present': { je:'étudierais', tu:'étudierais', il:'étudierait', nous:'étudierions', vous:'étudieriez', ils:'étudieraient' }
    },
    'écouter': {
    infinitive: 'écouter',
    present: { je:'écoute', tu:'écoutes', il:'écoute', nous:'écoutons', vous:'écoutez', ils:'écoutent' },
    'passe-compose': { je:'ai écouté', tu:'as écouté', il:'a écouté', nous:'avons écouté', vous:'avez écouté', ils:'ont écouté' },
    imparfait: { je:'écoutais', tu:'écoutais', il:'écoutait', nous:'écoutions', vous:'écoutiez', ils:'écoutaient' },
    'futur-proche': { je:'vais écouter', tu:'vas écouter', il:'va écouter', nous:'allons écouter', vous:'allez écouter', ils:'vont écouter' },
    'futur-simple': { je:'écouterai', tu:'écouteras', il:'écoutera', nous:'écouterons', vous:'écouterez', ils:'écouteront' },
    'conditionnel-present': { je:'écouterais', tu:'écouterais', il:'écouterait', nous:'écouterions', vous:'écouteriez', ils:'écouteraient' }
    },
    'chanter': {
    infinitive: 'chanter',
    present: { je:'chante', tu:'chantes', il:'chante', nous:'chantons', vous:'chantez', ils:'chantent' },
    'passe-compose': { je:'ai chanté', tu:'as chanté', il:'a chanté', nous:'avons chanté', vous:'avez chanté', ils:'ont chanté' },
    imparfait: { je:'chantais', tu:'chantais', il:'chantait', nous:'chantions', vous:'chantiez', ils:'chantaient' },
    'futur-proche': { je:'vais chanter', tu:'vas chanter', il:'va chanter', nous:'allons chanter', vous:'allez chanter', ils:'vont chanter' },
    'futur-simple': { je:'chanterai', tu:'chanteras', il:'chantera', nous:'chanterons', vous:'chanterez', ils:'chanteront' },
    'conditionnel-present': { je:'chanterais', tu:'chanterais', il:'chanterait', nous:'chanterions', vous:'chanteriez', ils:'chanteraient' }
    },
    'danser': {
    infinitive: 'danser',
    present: { je:'danse', tu:'danses', il:'danse', nous:'dansons', vous:'dansez', ils:'dansent' },
    'passe-compose': { je:'ai dansé', tu:'as dansé', il:'a dansé', nous:'avons dansé', vous:'avez dansé', ils:'ont dansé' },
    imparfait: { je:'dansais', tu:'dansais', il:'dansait', nous:'dansions', vous:'dansiez', ils:'dansaient' },
    'futur-proche': { je:'vais danser', tu:'vas danser', il:'va danser', nous:'allons danser', vous:'allez danser', ils:'vont danser' },
    'futur-simple': { je:'danserai', tu:'danseras', il:'dansera', nous:'danserons', vous:'danserez', ils:'danseront' },
    'conditionnel-present': { je:'danserais', tu:'danserais', il:'danserait', nous:'danserions', vous:'danseriez', ils:'danseraient' }
    },
    'habiter': {
    infinitive: 'habiter',
    present: { je:'habite', tu:'habites', il:'habite', nous:'habitons', vous:'habitez', ils:'habitent' },
    'passe-compose': { je:'ai habité', tu:'as habité', il:'a habité', nous:'avons habité', vous:'avez habité', ils:'ont habité' },
    imparfait: { je:'habitais', tu:'habitais', il:'habitait', nous:'habitions', vous:'habitiez', ils:'habitaient' },
    'futur-proche': { je:'vais habiter', tu:'vas habiter', il:'va habiter', nous:'allons habiter', vous:'allez habiter', ils:'vont habiter' },
    'futur-simple': { je:'habiterai', tu:'habiteras', il:'habitera', nous:'habiterons', vous:'habiterez', ils:'habiteront' },
    'conditionnel-present': { je:'habiterais', tu:'habiterais', il:'habiterait', nous:'habiterions', vous:'habiteriez', ils:'habiteraient' }
    },
    'regarder': {
    infinitive: 'regarder',
    present: { je:'regarde', tu:'regardes', il:'regarde', nous:'regardons', vous:'regardez', ils:'regardent' },
    'passe-compose': { je:'ai regardé', tu:'as regardé', il:'a regardé', nous:'avons regardé', vous:'avez regardé', ils:'ont regardé' },
    imparfait: { je:'regardais', tu:'regardais', il:'regardait', nous:'regardions', vous:'regardiez', ils:'regardaient' },
    'futur-proche': { je:'vais regarder', tu:'vas regarder', il:'va regarder', nous:'allons regarder', vous:'allez regarder', ils:'vont regarder' },
    'futur-simple': { je:'regarderai', tu:'regarderas', il:'regardera', nous:'regarderons', vous:'regarderez', ils:'regarderont' },
    'conditionnel-present': { je:'regarderais', tu:'regarderais', il:'regarderait', nous:'regarderions', vous:'regarderiez', ils:'regarderaient' }
    },
    'jouer': {
    infinitive: 'jouer',
    present: { je:'joue', tu:'joues', il:'joue', nous:'jouons', vous:'jouez', ils:'jouent' },
    'passe-compose': { je:'ai joué', tu:'as joué', il:'a joué', nous:'avons joué', vous:'avez joué', ils:'ont joué' },
    imparfait: { je:'jouais', tu:'jouais', il:'jouait', nous:'jouions', vous:'jouiez', ils:'jouaient' },
    'futur-proche': { je:'vais jouer', tu:'vas jouer', il:'va jouer', nous:'allons jouer', vous:'allez jouer', ils:'vont jouer' },
    'futur-simple': { je:'jouerai', tu:'joueras', il:'jouera', nous:'jouerons', vous:'jouerez', ils:'joueront' },
    'conditionnel-present': { je:'jouerais', tu:'jouerais', il:'jouerait', nous:'jouerions', vous:'joueriez', ils:'joueraient' }
    },
    'voyager': {
    infinitive: 'voyager',
    present: { je:'voyage', tu:'voyages', il:'voyage', nous:'voyageons', vous:'voyagez', ils:'voyagent' },
    'passe-compose': { je:'ai voyagé', tu:'as voyagé', il:'a voyagé', nous:'avons voyagé', vous:'avez voyagé', ils:'ont voyagé' },
    imparfait: { je:'voyageais', tu:'voyageais', il:'voyageait', nous:'voyagions', vous:'voyagiez', ils:'voyageaient' },
    'futur-proche': { je:'vais voyager', tu:'vas voyager', il:'va voyager', nous:'allons voyager', vous:'allez voyager', ils:'vont voyager' },
    'futur-simple': { je:'voyagerai', tu:'voyageras', il:'voyagera', nous:'voyagerons', vous:'voyagerez', ils:'voyageront' },
    'conditionnel-present': { je:'voyagerais', tu:'voyagerais', il:'voyagerait', nous:'voyagerions', vous:'voyageriez', ils:'voyageraient' }
    },
    'marcher': {
    infinitive: 'marcher',
    present: { je:'marche', tu:'marches', il:'marche', nous:'marchons', vous:'marchez', ils:'marchent' },
    'passe-compose': { je:'ai marché', tu:'as marché', il:'a marché', nous:'avons marché', vous:'avez marché', ils:'ont marché' },
    imparfait: { je:'marchais', tu:'marchais', il:'marchait', nous:'marchions', vous:'marchiez', ils:'marchaient' },
    'futur-proche': { je:'vais marcher', tu:'vas marcher', il:'va marcher', nous:'allons marcher', vous:'allez marcher', ils:'vont marcher' },
    'futur-simple': { je:'marcherai', tu:'marcheras', il:'marchera', nous:'marcherons', vous:'marcherez', ils:'marcheront' },
    'conditionnel-present': { je:'marcherais', tu:'marcherais', il:'marcherait', nous:'marcherions', vous:'marcheriez', ils:'marcheraient' }
    },
    'trouver': {
    infinitive: 'trouver',
    present: { je:'trouve', tu:'trouves', il:'trouve', nous:'trouvons', vous:'trouvez', ils:'trouvent' },
    'passe-compose': { je:'ai trouvé', tu:'as trouvé', il:'a trouvé', nous:'avons trouvé', vous:'avez trouvé', ils:'ont trouvé' },
    imparfait: { je:'trouvais', tu:'trouvais', il:'trouvait', nous:'trouvions', vous:'trouviez', ils:'trouvaient' },
    'futur-proche': { je:'vais trouver', tu:'vas trouver', il:'va trouver', nous:'allons trouver', vous:'allez trouver', ils:'vont trouver' },
    'futur-simple': { je:'trouverai', tu:'trouveras', il:'trouvera', nous:'trouverons', vous:'trouverez', ils:'trouveront' },
    'conditionnel-present': { je:'trouverais', tu:'trouverais', il:'trouverait', nous:'trouverions', vous:'trouveriez', ils:'trouveraient' }
    },
    'chercher': {
    infinitive: 'chercher',
    present: { je:'cherche', tu:'cherches', il:'cherche', nous:'cherchons', vous:'cherchez', ils:'cherchent' },
    'passe-compose': { je:'ai cherché', tu:'as cherché', il:'a cherché', nous:'avons cherché', vous:'avez cherché', ils:'ont cherché' },
    imparfait: { je:'cherchais', tu:'cherchais', il:'cherchait', nous:'cherchions', vous:'cherchiez', ils:'cherchaient' },
    'futur-proche': { je:'vais chercher', tu:'vas chercher', il:'va chercher', nous:'allons chercher', vous:'allez chercher', ils:'vont chercher' },
    'futur-simple': { je:'chercherai', tu:'chercheras', il:'cherchera', nous:'chercherons', vous:'chercherez', ils:'chercheront' },
    'conditionnel-present': { je:'chercherais', tu:'chercherais', il:'chercherait', nous:'chercherions', vous:'chercheriez', ils:'chercheraient' }
    },
    'demander': {
    infinitive: 'demander',
    present: { je:'demande', tu:'demandes', il:'demande', nous:'demandons', vous:'demandez', ils:'demandent' },
    'passe-compose': { je:'ai demandé', tu:'as demandé', il:'a demandé', nous:'avons demandé', vous:'avez demandé', ils:'ont demandé' },
    imparfait: { je:'demandais', tu:'demandais', il:'demandait', nous:'demandions', vous:'demandiez', ils:'demandaient' },
    'futur-proche': { je:'vais demander', tu:'vas demander', il:'va demander', nous:'allons demander', vous:'allez demander', ils:'vont demander' },
    'futur-simple': { je:'demanderai', tu:'demanderas', il:'demandera', nous:'demanderons', vous:'demanderez', ils:'demanderont' },
    'conditionnel-present': { je:'demanderais', tu:'demanderais', il:'demanderait', nous:'demanderions', vous:'demanderiez', ils:'demanderaient' }
    },
    'donner': {
    infinitive: 'donner',
    present: { je:'donne', tu:'donnes', il:'donne', nous:'donnons', vous:'donnez', ils:'donnent' },
    'passe-compose': { je:'ai donné', tu:'as donné', il:'a donné', nous:'avons donné', vous:'avez donné', ils:'ont donné' },
    imparfait: { je:'donnais', tu:'donnais', il:'donnait', nous:'donnions', vous:'donniez', ils:'donnaient' },
    'futur-proche': { je:'vais donner', tu:'vas donner', il:'va donner', nous:'allons donner', vous:'allez donner', ils:'vont donner' },
    'futur-simple': { je:'donnerai', tu:'donneras', il:'donnera', nous:'donnerons', vous:'donnerez', ils:'donneront' },
    'conditionnel-present': { je:'donnerais', tu:'donnerais', il:'donnerait', nous:'donnerions', vous:'donneriez', ils:'donneraient' }
    },
    'fermer': {
    infinitive: 'fermer',
    present: { je:'ferme', tu:'fermes', il:'ferme', nous:'fermons', vous:'fermez', ils:'ferment' },
    'passe-compose': { je:'ai fermé', tu:'as fermé', il:'a fermé', nous:'avons fermé', vous:'avez fermé', ils:'ont fermé' },
    imparfait: { je:'fermais', tu:'fermais', il:'fermait', nous:'fermions', vous:'fermiez', ils:'fermaient' },
    'futur-proche': { je:'vais fermer', tu:'vas fermer', il:'va fermer', nous:'allons fermer', vous:'allez fermer', ils:'vont fermer' },
    'futur-simple': { je:'fermerai', tu:'fermeras', il:'fermera', nous:'fermerons', vous:'fermerez', ils:'fermeront' },
    'conditionnel-present': { je:'fermerais', tu:'fermerais', il:'fermerait', nous:'fermerions', vous:'fermeriez', ils:'fermeraient' }
    },
    'préparer': {
    infinitive: 'préparer',
    present: { je:'prépare', tu:'prépares', il:'prépare', nous:'préparons', vous:'préparez', ils:'préparent' },
    'passe-compose': { je:'ai préparé', tu:'as préparé', il:'a préparé', nous:'avons préparé', vous:'avez préparé', ils:'ont préparé' },
    imparfait: { je:'préparais', tu:'préparais', il:'préparait', nous:'préparions', vous:'prépariez', ils:'préparaient' },
    'futur-proche': { je:'vais préparer', tu:'vas préparer', il:'va préparer', nous:'allons préparer', vous:'allez préparer', ils:'vont préparer' },
    'futur-simple': { je:'préparerai', tu:'prépareras', il:'préparera', nous:'préparerons', vous:'préparerez', ils:'prépareront' },
    'conditionnel-present': { je:'préparerais', tu:'préparerais', il:'préparerait', nous:'préparerions', vous:'prépareriez', ils:'prépareraient' }
    },
    'visiter': {
    infinitive: 'visiter',
    present: { je:'visite', tu:'visites', il:'visite', nous:'visitons', vous:'visitez', ils:'visitent' },
    'passe-compose': { je:'ai visité', tu:'as visité', il:'a visité', nous:'avons visité', vous:'avez visité', ils:'ont visité' },
    imparfait: { je:'visitais', tu:'visitais', il:'visitait', nous:'visions', vous:'visitez', ils:'visitaient' },
    'futur-proche': { je:'vais visiter', tu:'vas visiter', il:'va visiter', nous:'allons visiter', vous:'allez visiter', ils:'vont visiter' },
    'futur-simple': { je:'visiterai', tu:'visiteras', il:'visitera', nous:'visiterons', vous:'visiterez', ils:'visiteront' },
    'conditionnel-present': { je:'visiterais', tu:'visiterais', il:'visiterait', nous:'visiterions', vous:'visiteriez', ils:'visiteraient' }
    },
    'raconter': {
    infinitive: 'raconter',
    present: { je:'raconte', tu:'racontes', il:'raconte', nous:'racontons', vous:'racontez', ils:'racontent' },
    'passe-compose': { je:'ai raconté', tu:'as raconté', il:'a raconté', nous:'avons raconté', vous:'avez raconté', ils:'ont raconté' },
    imparfait: { je:'racontais', tu:'racontais', il:'racontait', nous:'racontions', vous:'racontiez', ils:'racontaient' },
    'futur-proche': { je:'vais raconter', tu:'vas raconter', il:'va raconter', nous:'allons raconter', vous:'allez raconter', ils:'vont raconter' },
    'futur-simple': { je:'raconterai', tu:'raconteras', il:'racontera', nous:'raconterons', vous:'raconterez', ils:'raconteront' },
    'conditionnel-present': { je:'raconterais', tu:'raconterais', il:'raconterait', nous:'raconterions', vous:'raconteriez', ils:'raconteraient' }
    },
    'téléphoner': {
    infinitive: 'téléphoner',
    present: { je:'téléphone', tu:'téléphones', il:'téléphone', nous:'téléphonons', vous:'téléphonez', ils:'téléphonent' },
    'passe-compose': { je:'ai téléphoné', tu:'as téléphoné', il:'a téléphoné', nous:'avons téléphoné', vous:'avez téléphoné', ils:'ont téléphoné' },
    imparfait: { je:'téléphonais', tu:'téléphonais', il:'téléphonait', nous:'téléphonions', vous:'téléphoniez', ils:'téléphonaient' },
    'futur-proche': { je:'vais téléphoner', tu:'vas téléphoner', il:'va téléphoner', nous:'allons téléphoner', vous:'allez téléphoner', ils:'vont téléphoner' },
    'futur-simple': { je:'téléphonerai', tu:'téléphoneras', il:'téléphonera', nous:'téléphonerons', vous:'téléphonerez', ils:'téléphoneront' },
    'conditionnel-present': { je:'téléphonerais', tu:'téléphonerais', il:'téléphonerait', nous:'téléphonerions', vous:'téléphoneriez', ils:'téléphoneraient' }
    },
    'garder': {
    infinitive: 'garder',
    present: { je:'garde', tu:'gardes', il:'garde', nous:'gardons', vous:'gardez', ils:'gardent' },
    'passe-compose': { je:'ai gardé', tu:'as gardé', il:'a gardé', nous:'avons gardé', vous:'avez gardé', ils:'ont gardé' },
    imparfait: { je:'gardais', tu:'gardais', il:'gardait', nous:'gardions', vous:'gardiez', ils:'gardaient' },
    'futur-proche': { je:'vais garder', tu:'vas garder', il:'va garder', nous:'allons garder', vous:'allez garder', ils:'vont garder' },
    'futur-simple': { je:'garderai', tu:'garderas', il:'gardera', nous:'garderons', vous:'garderez', ils:'garderont' },
    'conditionnel-present': { je:'garderais', tu:'garderais', il:'garderait', nous:'garderions', vous:'garderiez', ils:'garderaient' }
    },
    'nettoyer': {
    infinitive: 'nettoyer',
    present: { je:'nettoie', tu:'nettoies', il:'nettoie', nous:'nettoyons', vous:'nettoyez', ils:'nettoient' },
    'passe-compose': { je:'ai nettoyé', tu:'as nettoyé', il:'a nettoyé', nous:'avons nettoyé', vous:'avez nettoyé', ils:'ont nettoyé' },
    imparfait: { je:'nettoyais', tu:'nettoyais', il:'nettoyait', nous:'nettoyions', vous:'nettoyiez', ils:'nettoyaient' },
    'futur-proche': { je:'vais nettoyer', tu:'vas nettoyer', il:'va nettoyer', nous:'allons nettoyer', vous:'allez nettoyer', ils:'vont nettoyer' },
    'futur-simple': { je:'nettoierai', tu:'nettoieras', il:'nettoiera', nous:'nettoierons', vous:'nettoierez', ils:'nettoieront' },
    'conditionnel-present': { je:'nettoierais', tu:'nettoierais', il:'nettoierait', nous:'nettoierions', vous:'nettoieriez', ils:'nettoieraient' }
    },
    'aider': {
    infinitive: 'aider',
    present: { je:'aide', tu:'aides', il:'aide', nous:'aidons', vous:'aidez', ils:'aident' },
    'passe-compose': { je:'ai aidé', tu:'as aidé', il:'a aidé', nous:'avons aidé', vous:'avez aidé', ils:'ont aidé' },
    imparfait: { je:'aidais', tu:'aidais', il:'aidait', nous:'aidions', vous:'aidiez', ils:'aidaient' },
    'futur-proche': { je:'vais aider', tu:'vas aider', il:'va aider', nous:'allons aider', vous:'allez aider', ils:'vont aider' },
    'futur-simple': { je:'aiderai', tu:'aideras', il:'aidera', nous:'aiderons', vous:'aiderez', ils:'aideront' },
    'conditionnel-present': { je:'aiderais', tu:'aiderais', il:'aiderait', nous:'aiderions', vous:'aideriez', ils:'aideraient' }
    },
    'remercier': {
    infinitive: 'remercier',
    present: { je:'remercie', tu:'remercies', il:'remercie', nous:'remercions', vous:'remerciez', ils:'remercient' },
    'passe-compose': { je:'ai remercié', tu:'as remercié', il:'a remercié', nous:'avons remercié', vous:'avez remercié', ils:'ont remercié' },
    imparfait: { je:'remerciais', tu:'remerciais', il:'remerciait', nous:'remerciions', vous:'remerciiez', ils:'remerciaient' },
    'futur-proche': { je:'vais remercier', tu:'vas remercier', il:'va remercier', nous:'allons remercier', vous:'allez remercier', ils:'vont remercier' },
    'futur-simple': { je:'remercierai', tu:'remercieras', il:'remerciera', nous:'remercierons', vous:'remercierez', ils:'remercieront' },
    'conditionnel-present': { je:'remercierais', tu:'remercierais', il:'remercierait', nous:'remercierions', vous:'remercieriez', ils:'remercieraient' }
    },
    'télétravailler': {
    infinitive: 'télétravailler',
    present: { je:'télétravaille', tu:'télétravailles', il:'télétravaille', nous:'télétravaillons', vous:'télétravaillez', ils:'télétravaillent' },
    'passe-compose': { je:'ai télétravaillé', tu:'as télétravaillé', il:'a télétravaillé', nous:'avons télétravaillé', vous:'avez télétravaillé', ils:'ont télétravaillé' },
    imparfait: { je:'télétravaillais', tu:'télétravaillais', il:'télétravaillait', nous:'télétravaillions', vous:'télétravailliez', ils:'télétravaillaient' },
    'futur-proche': { je:'vais télétravailler', tu:'vas télétravailler', il:'va télétravailler', nous:'allons télétravailler', vous:'allez télétravailler', ils:'vont télétravailler' },
    'futur-simple': { je:'télétravaillerai', tu:'télétravailleras', il:'télétravaillera', nous:'télétravaillerons', vous:'télétravaillerez', ils:'télétravailleront' },
    'conditionnel-present': { je:'télétravaillerais', tu:'télétravaillerais', il:'télétravaillerait', nous:'télétravaillerions', vous:'télétravailleriez', ils:'télétravailleraient' }
    },
    'signer': {
    infinitive: 'signer',
    present: { je:'signe', tu:'signes', il:'signe', nous:'signons', vous:'signez', ils:'signent' },
    'passe-compose': { je:'ai signé', tu:'as signé', il:'a signé', nous:'avons signé', vous:'avez signé', ils:'ont signé' },
    imparfait: { je:'signais', tu:'signais', il:'signait', nous:'signions', vous:'signiez', ils:'signaient' },
    'futur-proche': { je:'vais signer', tu:'vas signer', il:'va signer', nous:'allons signer', vous:'allez signer', ils:'vont signer' },
    'futur-simple': { je:'signerai', tu:'signeras', il:'signera', nous:'signerons', vous:'signerez', ils:'signeront' },
    'conditionnel-present': { je:'signerais', tu:'signerais', il:'signerait', nous:'signerions', vous:'signeriez', ils:'signeraient' }
    },
    'porter': {
    infinitive: 'porter',
    present: { je:'porte', tu:'portes', il:'porte', nous:'portons', vous:'portez', ils:'portent' },
    'passe-compose': { je:'ai porté', tu:'as porté', il:'a porté', nous:'avons porté', vous:'avez porté', ils:'ont porté' },
    imparfait: { je:'portais', tu:'portais', il:'portait', nous:'portions', vous:'portiez', ils:'portaient' },
    'futur-proche': { je:'vais porter', tu:'vas porter', il:'va porter', nous:'allons porter', vous:'allez porter', ils:'vont porter' },
    'futur-simple': { je:'porterai', tu:'porteras', il:'portera', nous:'porterons', vous:'porterez', ils:'porteront' },
    'conditionnel-present': { je:'porterais', tu:'porterais', il:'porterait', nous:'porterions', vous:'porteriez', ils:'porteraient' }
    },
    'souhaiter': {
    infinitive: 'souhaiter',
    present: { je:'souhaite', tu:'souhaites', il:'souhaite', nous:'souhaitons', vous:'souhaitez', ils:'souhaitent' },
    'passe-compose': { je:'ai souhaité', tu:'as souhaité', il:'a souhaité', nous:'avons souhaité', vous:'avez souhaité', ils:'ont souhaité' },
    imparfait: { je:'souhaitais', tu:'souhaitais', il:'souhaitait', nous:'souhaitions', vous:'souhaitez', ils:'souhaitaient' },
    'futur-proche': { je:'vais souhaiter', tu:'vas souhaiter', il:'va souhaiter', nous:'allons souhaiter', vous:'allez souhaiter', ils:'vont souhaiter' },
    'futur-simple': { je:'souhaiterai', tu:'souhaiteras', il:'souhaitera', nous:'souhaiterons', vous:'souhaiterez', ils:'souhaiteront' },
    'conditionnel-present': { je:'souhaiterais', tu:'souhaiterais', il:'souhaiterait', nous:'souhaiterions', vous:'souhaiteriez', ils:'souhaiteraient' }
    },
    'commencer': {
    infinitive: 'commencer',
    present: { je:'commence', tu:'commences', il:'commence', nous:'commençons', vous:'commencez', ils:'commencent' },
    'passe-compose': { je:'ai commencé', tu:'as commencé', il:'a commencé', nous:'avons commencé', vous:'avez commencé', ils:'ont commencé' },
    imparfait: { je:'commençais', tu:'commençais', il:'commençait', nous:'commencions', vous:'commenciez', ils:'commençaient' },
    'futur-proche': { je:'vais commencer', tu:'vas commencer', il:'va commencer', nous:'allons commencer', vous:'allez commencer', ils:'vont commencer' },
    'futur-simple': { je:'commencerai', tu:'commenceras', il:'commencera', nous:'commencerons', vous:'commencerez', ils:'commenceront' },
    'conditionnel-present': { je:'commencerais', tu:'commencerais', il:'commencerait', nous:'commencerions', vous:'commenceriez', ils:'commenceraient' }
    },
    'penser': {
    infinitive: 'penser',
    present: { je:'pense', tu:'penses', il:'pense', nous:'pensons', vous:'pensez', ils:'pensent' },
    'passe-compose': { je:'ai pensé', tu:'as pensé', il:'a pensé', nous:'avons pensé', vous:'avez pensé', ils:'ont pensé' },
    imparfait: { je:'pensais', tu:'pensais', il:'pensait', nous:'pensions', vous:'pensiez', ils:'pensaient' },
    'futur-proche': { je:'vais penser', tu:'vas penser', il:'va penser', nous:'allons penser', vous:'allez penser', ils:'vont penser' },
    'futur-simple': { je:'penserai', tu:'penseras', il:'pensera', nous:'penserons', vous:'penserez', ils:'penseront' },
    'conditionnel-present': { je:'penserais', tu:'penserais', il:'penserait', nous:'penserions', vous:'penseriez', ils:'penseraient' }
    },
    'payer': {
    infinitive: 'payer',
    present: { je:'paie', tu:'paies', il:'paie', nous:'payons', vous:'payez', ils:'paient' },
    'passe-compose': { je:'ai payé', tu:'as payé', il:'a payé', nous:'avons payé', vous:'avez payé', ils:'ont payé' },
    imparfait: { je:'payais', tu:'payais', il:'payait', nous:'payions', vous:'payiez', ils:'payaient' },
    'futur-proche': { je:'vais payer', tu:'vas payer', il:'va payer', nous:'allons payer', vous:'allez payer', ils:'vont payer' },
    'futur-simple': { je:'payerai', tu:'payeras', il:'payera', nous:'payerons', vous:'payerez', ils:'payeront' },
    'conditionnel-present': { je:'payerais', tu:'payerais', il:'payerait', nous:'payerions', vous:'payeriez', ils:'payeraient' }
    },
    'acheter': {
    infinitive: 'acheter',
    present: { je:'achète', tu:'achètes', il:'achète', nous:'achetons', vous:'achetez', ils:'achètent' },
    'passe-compose': { je:'ai acheté', tu:'as acheté', il:'a acheté', nous:'avons acheté', vous:'avez acheté', ils:'ont acheté' },
    imparfait: { je:'achetais', tu:'achetais', il:'achetait', nous:'achetions', vous:'achetiez', ils:'achetaient' },
    'futur-proche': { je:'vais acheter', tu:'vas acheter', il:'va acheter', nous:'allons acheter', vous:'allez acheter', ils:'vont acheter' },
    'futur-simple': { je:'achèterai', tu:'achèteras', il:'achètera', nous:'achèterons', vous:'achèterez', ils:'achèteront' },
    'conditionnel-present': { je:'achèterais', tu:'achèterais', il:'achèterait', nous:'achèterions', vous:'achèteriez', ils:'achèteraient' }
    },
    'oublier': {
    infinitive: 'oublier',
    present: { je:'oublie', tu:'oublies', il:'oublie', nous:'oublions', vous:'oubliez', ils:'oublient' },
    'passe-compose': { je:'ai oublié', tu:'as oublié', il:'a oublié', nous:'avons oublié', vous:'avez oublié', ils:'ont oublié' },
    imparfait: { je:'oubliais', tu:'oubliais', il:'oubliait', nous:'oubliions', vous:'oubliiez', ils:'oubliaient' },
    'futur-proche': { je:'vais oublier', tu:'vas oublier', il:'va oublier', nous:'allons oublier', vous:'allez oublier', ils:'vont oublier' },
    'futur-simple': { je:'oublierai', tu:'oublieras', il:'oubliera', nous:'oublierons', vous:'oublierez', ils:'oublieront' },
    'conditionnel-present': { je:'oublierais', tu:'oublierais', il:'oublierait', nous:'oublierions', vous:'oublieriez', ils:'oublieraient' }
    },
    'cuisiner': {
    infinitive: 'cuisiner',
    present: { je:'cuisine', tu:'cuisines', il:'cuisine', nous:'cuisinons', vous:'cuisinez', ils:'cuisinent' },
    'passe-compose': { je:'ai cuisiné', tu:'as cuisiné', il:'a cuisiné', nous:'avons cuisiné', vous:'avez cuisiné', ils:'ont cuisiné' },
    imparfait: { je:'cuisinais', tu:'cuisinais', il:'cuisinait', nous:'cuisinions', vous:'cuisiniez', ils:'cuisinaient' },
    'futur-proche': { je:'vais cuisiner', tu:'vas cuisiner', il:'va cuisiner', nous:'allons cuisiner', vous:'allez cuisiner', ils:'vont cuisiner' },
    'futur-simple': { je:'cuisinerai', tu:'cuisineras', il:'cuisinera', nous:'cuisinerons', vous:'cuisinerez', ils:'cuisineront' },
    'conditionnel-present': { je:'cuisinerais', tu:'cuisinerais', il:'cuisinerait', nous:'cuisinerions', vous:'cuisineriez', ils:'cuisineraient' }
    },
    'inviter': {
    infinitive: 'inviter',
    present: { je:'invite', tu:'invites', il:'invite', nous:'invitons', vous:'invitez', ils:'invitent' },
    'passe-compose': { je:'ai invité', tu:'as invité', il:'a invité', nous:'avons invité', vous:'avez invité', ils:'ont invité' },
    imparfait: { je:'invitais', tu:'invitais', il:'invitait', nous:'invitions', vous:'invitiez', ils:'invitaient' },
    'futur-proche': { je:'vais inviter', tu:'vas inviter', il:'va inviter', nous:'allons inviter', vous:'allez inviter', ils:'vont inviter' },
    'futur-simple': { je:'inviterai', tu:'inviteras', il:'invitera', nous:'inviterons', vous:'inviterez', ils:'inviteront' },
    'conditionnel-present': { je:'inviterais', tu:'inviterais', il:'inviterait', nous:'inviterions', vous:'inviteriez', ils:'inviteraient' }
    },
    'laver': {
    infinitive: 'laver',
    present: { je:'lave', tu:'laves', il:'lave', nous:'lavons', vous:'lavez', ils:'lavent' },
    'passe-compose': { je:'ai lavé', tu:'as lavé', il:'a lavé', nous:'avons lavé', vous:'avez lavé', ils:'ont lavé' },
    imparfait: { je:'lavais', tu:'lavais', il:'lavait', nous:'lavions', vous:'laviez', ils:'lavaient' },
    'futur-proche': { je:'vais laver', tu:'vas laver', il:'va laver', nous:'allons laver', vous:'allez laver', ils:'vont laver' },
    'futur-simple': { je:'laverai', tu:'laveras', il:'lavera', nous:'laverons', vous:'laverez', ils:'laveront' },
    'conditionnel-present': { je:'laverais', tu:'laverais', il:'laverait', nous:'laverions', vous:'laveriez', ils:'laveraient' }
    },
    'organiser': {
    infinitive: 'organiser',
    present: { je:'organise', tu:'organises', il:'organise', nous:'organisons', vous:'organisez', ils:'organisent' },
    'passe-compose': { je:'ai organisé', tu:'as organisé', il:'a organisé', nous:'avons organisé', vous:'avez organisé', ils:'ont organisé' },
    imparfait: { je:'organisais', tu:'organisais', il:'organisait', nous:'organisions', vous:'organisiez', ils:'organisaient' },
    'futur-proche': { je:'vais organiser', tu:'vas organiser', il:'va organiser', nous:'allons organiser', vous:'allez organiser', ils:'vont organiser' },
    'futur-simple': { je:'organiserai', tu:'organiseras', il:'organisera', nous:'organiserons', vous:'organiserez', ils:'organiseront' },
    'conditionnel-present': { je:'organiserais', tu:'organiserais', il:'organiserait', nous:'organiserions', vous:'organiseriez', ils:'organiseraient' }
    },
    'utiliser': {
    infinitive: 'utiliser',
    present: { je:'utilise', tu:'utilises', il:'utilise', nous:'utilisons', vous:'utilisez', ils:'utilisent' },
    'passe-compose': { je:'ai utilisé', tu:'as utilisé', il:'a utilisé', nous:'avons utilisé', vous:'avez utilisé', ils:'ont utilisé' },
    imparfait: { je:'utilisais', tu:'utilisais', il:'utilisait', nous:'utilisions', vous:'utilisiez', ils:'utilisaient' },
    'futur-proche': { je:'vais utiliser', tu:'vas utiliser', il:'va utiliser', nous:'allons utiliser', vous:'allez utiliser', ils:'vont utiliser' },
    'futur-simple': { je:'utiliserai', tu:'utiliseras', il:'utilisera', nous:'utiliserons', vous:'utiliserez', ils:'utiliseront' },
    'conditionnel-present': { je:'utiliserais', tu:'utiliserais', il:'utiliserait', nous:'utiliserions', vous:'utiliseriez', ils:'utiliseraient' }
    },
    'tourner': {
    infinitive: 'tourner',
    present: { je:'tourne', tu:'tournes', il:'tourne', nous:'tournons', vous:'tournez', ils:'tournent' },
    'passe-compose': { je:'ai tourné', tu:'as tourné', il:'a tourné', nous:'avons tourné', vous:'avez tourné', ils:'ont tourné' },
    imparfait: { je:'tournais', tu:'tournais', il:'tournait', nous:'tournions', vous:'tourniez', ils:'tournaient' },
    'futur-proche': { je:'vais tourner', tu:'vas tourner', il:'va tourner', nous:'allons tourner', vous:'allez tourner', ils:'vont tourner' },
    'futur-simple': { je:'tournerai', tu:'tourneras', il:'tournera', nous:'tournerons', vous:'tournerez', ils:'tourneront' },
    'conditionnel-present': { je:'tournerais', tu:'tournerais', il:'tournerait', nous:'tournerions', vous:'tourneriez', ils:'tourneraient' }
    },
    'montrer': {
    infinitive: 'montrer',
    present: { je:'montre', tu:'montres', il:'montre', nous:'montrons', vous:'montrez', ils:'montrent' },
    'passe-compose': { je:'ai montré', tu:'as montré', il:'a montré', nous:'avons montré', vous:'avez montré', ils:'ont montré' },
    imparfait: { je:'montrais', tu:'montrais', il:'montrait', nous:'montrions', vous:'montriez', ils:'montraient' },
    'futur-proche': { je:'vais montrer', tu:'vas montrer', il:'va montrer', nous:'allons montrer', vous:'allez montrer', ils:'vont montrer' },
    'futur-simple': { je:'montrerai', tu:'montreras', il:'montrera', nous:'montrerons', vous:'montrerez', ils:'montreront' },
    'conditionnel-present': { je:'montrerais', tu:'montrerais', il:'montrerait', nous:'montrerions', vous:'montreriez', ils:'montreraient' }
    },
    'terminer': {
    infinitive: 'terminer',
    present: { je:'termine', tu:'termines', il:'termine', nous:'terminons', vous:'terminez', ils:'terminent' },
    'passe-compose': { je:'ai terminé', tu:'as terminé', il:'a terminé', nous:'avons terminé', vous:'avez terminé', ils:'ont terminé' },
    imparfait: { je:'terminais', tu:'terminais', il:'terminait', nous:'terminions', vous:'terminiez', ils:'terminaient' },
    'futur-proche': { je:'vais terminer', tu:'vas terminer', il:'va terminer', nous:'allons terminer', vous:'allez terminer', ils:'vont terminer' },
    'futur-simple': { je:'terminerai', tu:'termineras', il:'terminera', nous:'terminerons', vous:'terminerez', ils:'termineront' },
    'conditionnel-present': { je:'terminerais', tu:'terminerais', il:'terminerait', nous:'terminerions', vous:'termineriez', ils:'termineraient' }
    },
    'célébrer': {
    infinitive: 'célébrer',
    present: { je:'célèbre', tu:'célèbres', il:'célèbre', nous:'célébrons', vous:'célébrez', ils:'célèbrent' },
    'passe-compose': { je:'ai célébré', tu:'as célébré', il:'a célébré', nous:'avons célébré', vous:'avez célébré', ils:'ont célébré' },
    imparfait: { je:'célébrais', tu:'célébrais', il:'célébrait', nous:'célébrions', vous:'célébriez', ils:'célébraient' },
    'futur-proche': { je:'vais célébrer', tu:'vas célébrer', il:'va célébrer', nous:'allons célébrer', vous:'allez célébrer', ils:'vont célébrer' },
    'futur-simple': { je:'célébrerai', tu:'célébreras', il:'célébrera', nous:'célébrerons', vous:'célébrerez', ils:'célébreront' },
    'conditionnel-present': { je:'célébrerais', tu:'célébrerais', il:'célébrerait', nous:'célébrerions', vous:'célébreriez', ils:'célébreraient' }
    },
    'adorer': {
    infinitive: 'adorer',
    present: { je:'adore', tu:'adores', il:'adore', nous:'adorons', vous:'adorez', ils:'adorent' },
    'passe-compose': { je:'ai adoré', tu:'as adoré', il:'a adoré', nous:'avons adoré', vous:'avez adoré', ils:'ont adoré' },
    imparfait: { je:'adorais', tu:'adorais', il:'adorait', nous:'adorions', vous:'adoriez', ils:'adoraient' },
    'futur-proche': { je:'vais adorer', tu:'vas adorer', il:'va adorer', nous:'allons adorer', vous:'allez adorer', ils:'vont adorer' },
    'futur-simple': { je:'adorerai', tu:'adoreras', il:'adorera', nous:'adorerons', vous:'adorerez', ils:'adoreront' },
    'conditionnel-present': { je:'adorerais', tu:'adorerais', il:'adorerait', nous:'adorerions', vous:'adoreriez', ils:'adoreraient' }
    },
    'accepter': {
    infinitive: 'accepter',
    present: { je:'accepte', tu:'acceptes', il:'accepte', nous:'acceptons', vous:'acceptez', ils:'acceptent' },
    'passe-compose': { je:'ai accepté', tu:'as accepté', il:'a accepté', nous:'avons accepté', vous:'avez accepté', ils:'ont accepté' },
    imparfait: { je:'acceptais', tu:'acceptais', il:'acceptait', nous:'acceptions', vous:'acceptiez', ils:'acceptaient' },
    'futur-proche': { je:'vais accepter', tu:'vas accepter', il:'va accepter', nous:'allons accepter', vous:'allez accepter', ils:'vont accepter' },
    'futur-simple': { je:'accepterai', tu:'accepteras', il:'acceptera', nous:'accepterons', vous:'accepterez', ils:'accepteront' },
    'conditionnel-present': { je:'accepterais', tu:'accepterais', il:'accepterait', nous:'accepterions', vous:'accepteriez', ils:'accepteraient' }
    },
    'ajouter': {
    infinitive: 'ajouter',
    present: { je:'ajoute', tu:'ajoutes', il:'ajoute', nous:'ajoutons', vous:'ajoutez', ils:'ajoutent' },
    'passe-compose': { je:'ai ajouté', tu:'as ajouté', il:'a ajouté', nous:'avons ajouté', vous:'avez ajouté', ils:'ont ajouté' },
    imparfait: { je:'ajoutais', tu:'ajoutais', il:'ajoutait', nous:'ajoutions', vous:'ajoutiez', ils:'ajoutaient' },
    'futur-proche': { je:'vais ajouter', tu:'vas ajouter', il:'va ajouter', nous:'allons ajouter', vous:'allez ajouter', ils:'vont ajouter' },
    'futur-simple': { je:'ajouterai', tu:'ajouteras', il:'ajoutera', nous:'ajouterons', vous:'ajouterez', ils:'ajouteront' },
    'conditionnel-present': { je:'ajouterais', tu:'ajouterais', il:'ajouterait', nous:'ajouterions', vous:'ajouteriez', ils:'ajouteraient' }
    },
    'allumer': {
    infinitive: 'allumer',
    present: { je:'allume', tu:'allumes', il:'allume', nous:'allumons', vous:'allumez', ils:'allument' },
    'passe-compose': { je:'ai allumé', tu:'as allumé', il:'a allumé', nous:'avons allumé', vous:'avez allumé', ils:'ont allumé' },
    imparfait: { je:'allumais', tu:'allumais', il:'allumait', nous:'allumions', vous:'allumiez', ils:'allumaient' },
    'futur-proche': { je:'vais allumer', tu:'vas allumer', il:'va allumer', nous:'allons allumer', vous:'allez allumer', ils:'vont allumer' },
    'futur-simple': { je:'allumerai', tu:'allumeras', il:'allumera', nous:'allumerons', vous:'allumerez', ils:'allumeront' },
    'conditionnel-present': { je:'allumerais', tu:'allumerais', il:'allumerait', nous:'allumerions', vous:'allumeriez', ils:'allumeraient' }
    },
    'avancer': {
    infinitive: 'avancer',
    present: { je:'avance', tu:'avances', il:'avance', nous:'avançons', vous:'avancez', ils:'avancent' },
    'passe-compose': { je:'ai avancé', tu:'as avancé', il:'a avancé', nous:'avons avancé', vous:'avez avancé', ils:'ont avancé' },
    imparfait: { je:'avançais', tu:'avançais', il:'avançait', nous:'avancions', vous:'avanciez', ils:'avançaient' },
    'futur-proche': { je:'vais avancer', tu:'vas avancer', il:'va avancer', nous:'allons avancer', vous:'allez avancer', ils:'vont avancer' },
    'futur-simple': { je:'avancerai', tu:'avanceras', il:'avancera', nous:'avancerons', vous:'avancerez', ils:'avanceront' },
    'conditionnel-present': { je:'avancerais', tu:'avancerais', il:'avancerait', nous:'avancerions', vous:'avanceriez', ils:'avanceraient' }
    },
    'arranger': {
    infinitive: 'arranger',
    present: { je:'arrange', tu:'arranges', il:'arrange', nous:'arrangeons', vous:'arrangez', ils:'arrangent' },
    'passe-compose': { je:'ai arrangé', tu:'as arrangé', il:'a arrangé', nous:'avons arrangé', vous:'avez arrangé', ils:'ont arrangé' },
    imparfait: { je:'arrangeais', tu:'arrangeais', il:'arrangeait', nous:'arrangions', vous:'arrangiez', ils:'arrangeaient' },
    'futur-proche': { je:'vais arranger', tu:'vas arranger', il:'va arranger', nous:'allons arranger', vous:'allez arranger', ils:'vont arranger' },
    'futur-simple': { je:'arrangerai', tu:'arrangeras', il:'arrangera', nous:'arrangerons', vous:'arrangerez', ils:'arrangeront' },
    'conditionnel-present': { je:'arrangerais', tu:'arrangerais', il:'arrangerait', nous:'arrangerions', vous:'arrangeriez', ils:'arrangeraient' }
    },
    'annoncer': {
    infinitive: 'annoncer',
    present: { je:'annonce', tu:'annonces', il:'annonce', nous:'annonçons', vous:'annoncez', ils:'annoncent' },
    'passe-compose': { je:'ai annoncé', tu:'as annoncé', il:'a annoncé', nous:'avons annoncé', vous:'avez annoncé', ils:'ont annoncé' },
    imparfait: { je:'annonçais', tu:'annonçais', il:'annonçait', nous:'annoncions', vous:'annonciez', ils:'annonçaient' },
    'futur-proche': { je:'vais annoncer', tu:'vas annoncer', il:'va annoncer', nous:'allons annoncer', vous:'allez annoncer', ils:'vont annoncer' },
    'futur-simple': { je:'annoncerai', tu:'annonceras', il:'annoncera', nous:'annoncerons', vous:'annoncerez', ils:'annonceront' },
    'conditionnel-present': { je:'annoncerais', tu:'annoncerais', il:'annoncerait', nous:'annoncerions', vous:'annonceriez', ils:'annonceraient' }
    },
    'apporter': {
    infinitive: 'apporter',
    present: { je:'apporte', tu:'apportes', il:'apporte', nous:'apportons', vous:'apportez', ils:'apportent' },
    'passe-compose': { je:'ai apporté', tu:'as apporté', il:'a apporté', nous:'avons apporté', vous:'avez apporté', ils:'ont apporté' },
    imparfait: { je:'apportais', tu:'apportais', il:'apportait', nous:'apportions', vous:'apportiez', ils:'apportaient' },
    'futur-proche': { je:'vais apporter', tu:'vas apporter', il:'va apporter', nous:'allons apporter', vous:'allez apporter', ils:'vont apporter' },
    'futur-simple': { je:'apporterai', tu:'apporteras', il:'apportera', nous:'apporterons', vous:'apporterez', ils:'apporteront' },
    'conditionnel-present': { je:'apporterais', tu:'apporterais', il:'apporterait', nous:'apporterions', vous:'apporteriez', ils:'apporteraient' }
    },
    'assister': {
    infinitive: 'assister',
    present: { je:'assiste', tu:'assistes', il:'assiste', nous:'assistons', vous:'assistez', ils:'assistent' },
    'passe-compose': { je:'ai assisté', tu:'as assisté', il:'a assisté', nous:'avons assisté', vous:'avez assisté', ils:'ont assisté' },
    imparfait: { je:'assistais', tu:'assistais', il:'assistait', nous:'assistions', vous:'assistiez', ils:'assistaient' },
    'futur-proche': { je:'vais assister', tu:'vas assister', il:'va assister', nous:'allons assister', vous:'allez assister', ils:'vont assister' },
    'futur-simple': { je:'assisterai', tu:'assisteras', il:'assistera', nous:'assisterons', vous:'assisterez', ils:'assisteront' },
    'conditionnel-present': { je:'assisterais', tu:'assisterais', il:'assisterait', nous:'assisterions', vous:'assisteriez', ils:'assisteraient' }
    },
    'attraper': {
    infinitive: 'attraper',
    present: { je:'attrape', tu:'attrapes', il:'attrape', nous:'attrapons', vous:'attrapez', ils:'attrapent' },
    'passe-compose': { je:'ai attrapé', tu:'as attrapé', il:'a attrapé', nous:'avons attrapé', vous:'avez attrapé', ils:'ont attrapé' },
    imparfait: { je:'attrapais', tu:'attrapais', il:'attrapait', nous:'attrapions', vous:'attrapiez', ils:'attrapaient' },
    'futur-proche': { je:'vais attraper', tu:'vas attraper', il:'va attraper', nous:'allons attraper', vous:'allez attraper', ils:'vont attraper' },
    'futur-simple': { je:'attraperai', tu:'attraperas', il:'attrapera', nous:'attraperons', vous:'attraperez', ils:'attraperont' },
    'conditionnel-present': { je:'attraperais', tu:'attraperais', il:'attraperait', nous:'attraperions', vous:'attraperiez', ils:'attraperaient' }
    },
    'bavarder': {
    infinitive: 'bavarder',
    present: { je:'bavarde', tu:'bavardes', il:'bavarde', nous:'bavardons', vous:'bavardez', ils:'bavardent' },
    'passe-compose': { je:'ai bavardé', tu:'as bavardé', il:'a bavardé', nous:'avons bavardé', vous:'avez bavardé', ils:'ont bavardé' },
    imparfait: { je:'bavardais', tu:'bavardais', il:'bavardait', nous:'bavardions', vous:'bavardiez', ils:'bavardaient' },
    'futur-proche': { je:'vais bavarder', tu:'vas bavarder', il:'va bavarder', nous:'allons bavarder', vous:'allez bavarder', ils:'vont bavarder' },
    'futur-simple': { je:'bavarderai', tu:'bavarderas', il:'bavardera', nous:'bavarderons', vous:'bavarderez', ils:'bavarderont' },
    'conditionnel-present': { je:'bavarderais', tu:'bavarderais', il:'bavarderait', nous:'bavarderions', vous:'bavarderiez', ils:'bavarderaient' }
    },
    'bouger': {
    infinitive: 'bouger',
    present: { je:'bouge', tu:'bouges', il:'bouge', nous:'bougeons', vous:'bougez', ils:'bougent' },
    'passe-compose': { je:'ai bougé', tu:'as bougé', il:'a bougé', nous:'avons bougé', vous:'avez bougé', ils:'ont bougé' },
    imparfait: { je:'bougeais', tu:'bougeais', il:'bougeait', nous:'bougions', vous:'bougiez', ils:'bougeaient' },
    'futur-proche': { je:'vais bouger', tu:'vas bouger', il:'va bouger', nous:'allons bouger', vous:'allez bouger', ils:'vont bouger' },
    'futur-simple': { je:'bougerai', tu:'bougeras', il:'bougera', nous:'bougerons', vous:'bougerez', ils:'bougeront' },
    'conditionnel-present': { je:'bougerais', tu:'bougerais', il:'bougerait', nous:'bougerions', vous:'bougeriez', ils:'bougeraient' }
    },
    'brûler': {
    infinitive: 'brûler',
    present: { je:'brûle', tu:'brûles', il:'brûle', nous:'brûlons', vous:'brûlez', ils:'brûlent' },
    'passe-compose': { je:'ai brûlé', tu:'as brûlé', il:'a brûlé', nous:'avons brûlé', vous:'avez brûlé', ils:'ont brûlé' },
    imparfait: { je:'brûlais', tu:'brûlais', il:'brûlait', nous:'brûlions', vous:'brûliez', ils:'brûlaient' },
    'futur-proche': { je:'vais brûler', tu:'vas brûler', il:'va brûler', nous:'allons brûler', vous:'allez brûler', ils:'vont brûler' },
    'futur-simple': { je:'brûlerai', tu:'brûleras', il:'brûlera', nous:'brûlerons', vous:'brûlerez', ils:'brûleront' },
    'conditionnel-present': { je:'brûlerais', tu:'brûlerais', il:'brûlerait', nous:'brûlerions', vous:'brûleriez', ils:'brûleraient' }
    },
    'cacher': {
    infinitive: 'cacher',
    present: { je:'cache', tu:'caches', il:'cache', nous:'cachons', vous:'cachez', ils:'cachent' },
    'passe-compose': { je:'ai caché', tu:'as caché', il:'a caché', nous:'avons caché', vous:'avez caché', ils:'ont caché' },
    imparfait: { je:'cachais', tu:'cachais', il:'cachait', nous:'cachions', vous:'cachiez', ils:'cachaient' },
    'futur-proche': { je:'vais cacher', tu:'vas cacher', il:'va cacher', nous:'allons cacher', vous:'allez cacher', ils:'vont cacher' },
    'futur-simple': { je:'cacherai', tu:'cacheras', il:'cachera', nous:'cacherons', vous:'cacherez', ils:'cacheront' },
    'conditionnel-present': { je:'cacherais', tu:'cacherais', il:'cacherait', nous:'cacherions', vous:'cacheriez', ils:'cacheraient' }
    },
    'casser': {
    infinitive: 'casser',
    present: { je:'casse', tu:'casses', il:'casse', nous:'cassons', vous:'cassez', ils:'cassent' },
    'passe-compose': { je:'ai cassé', tu:'as cassé', il:'a cassé', nous:'avons cassé', vous:'avez cassé', ils:'ont cassé' },
    imparfait: { je:'cassais', tu:'cassais', il:'cassait', nous:'cassions', vous:'cassiez', ils:'cassaient' },
    'futur-proche': { je:'vais casser', tu:'vas casser', il:'va casser', nous:'allons casser', vous:'allez casser', ils:'vont casser' },
    'futur-simple': { je:'casserai', tu:'casseras', il:'cassera', nous:'casserons', vous:'casserez', ils:'casseront' },
    'conditionnel-present': { je:'casserais', tu:'casserais', il:'casserait', nous:'casserions', vous:'casseriez', ils:'casseraient' }
    },
    'changer': {
    infinitive: 'changer',
    present: { je:'change', tu:'changes', il:'change', nous:'changeons', vous:'changez', ils:'changent' },
    'passe-compose': { je:'ai changé', tu:'as changé', il:'a changé', nous:'avons changé', vous:'avez changé', ils:'ont changé' },
    imparfait: { je:'changeais', tu:'changeais', il:'changeait', nous:'changions', vous:'changiez', ils:'changeaient' },
    'futur-proche': { je:'vais changer', tu:'vas changer', il:'va changer', nous:'allons changer', vous:'allez changer', ils:'vont changer' },
    'futur-simple': { je:'changerai', tu:'changeras', il:'changera', nous:'changerons', vous:'changerez', ils:'changeront' },
    'conditionnel-present': { je:'changerais', tu:'changerais', il:'changerait', nous:'changerions', vous:'changeriez', ils:'changeraient' }
    },
    'charger': {
    infinitive: 'charger',
    present: { je:'charge', tu:'charges', il:'charge', nous:'chargeons', vous:'chargez', ils:'chargent' },
    'passe-compose': { je:'ai chargé', tu:'as chargé', il:'a chargé', nous:'avons chargé', vous:'avez chargé', ils:'ont chargé' },
    imparfait: { je:'chargeais', tu:'chargeais', il:'chargeait', nous:'chargions', vous:'chargiez', ils:'chargeaient' },
    'futur-proche': { je:'vais charger', tu:'vas charger', il:'va charger', nous:'allons charger', vous:'allez charger', ils:'vont charger' },
    'futur-simple': { je:'chargerai', tu:'chargeras', il:'chargera', nous:'chargerons', vous:'chargerez', ils:'chargeront' },
    'conditionnel-present': { je:'chargerais', tu:'chargerais', il:'chargerait', nous:'chargerions', vous:'chargeriez', ils:'chargeraient' }
    },
    'commander': {
    infinitive: 'commander',
    present: { je:'commande', tu:'commandes', il:'commande', nous:'commandons', vous:'commandez', ils:'commandent' },
    'passe-compose': { je:'ai commandé', tu:'as commandé', il:'a commandé', nous:'avons commandé', vous:'avez commandé', ils:'ont commandé' },
    imparfait: { je:'commandais', tu:'commandais', il:'commandait', nous:'commandions', vous:'commandiez', ils:'commandaient' },
    'futur-proche': { je:'vais commander', tu:'vas commander', il:'va commander', nous:'allons commander', vous:'allez commander', ils:'vont commander' },
    'futur-simple': { je:'commanderai', tu:'commanderas', il:'commandera', nous:'commanderons', vous:'commanderez', ils:'commanderont' },
    'conditionnel-present': { je:'commanderais', tu:'commanderais', il:'commanderait', nous:'commanderions', vous:'commanderiez', ils:'commanderaient' }
    },
    'compléter': {
    infinitive: 'compléter',
    present: { je:'complète', tu:'complètes', il:'complète', nous:'complétons', vous:'complétez', ils:'complètent' },
    'passe-compose': { je:'ai complété', tu:'as complété', il:'a complété', nous:'avons complété', vous:'avez complété', ils:'ont complété' },
    imparfait: { je:'complétais', tu:'complétais', il:'complétait', nous:'complétions', vous:'complétiez', ils:'complétaient' },
    'futur-proche': { je:'vais compléter', tu:'vas compléter', il:'va compléter', nous:'allons compléter', vous:'allez compléter', ils:'vont compléter' },
    'futur-simple': { je:'compléterai', tu:'compléteras', il:'complétera', nous:'compléterons', vous:'compléterez', ils:'compléteront' },
    'conditionnel-present': { je:'compléterais', tu:'compléterais', il:'compléterait', nous:'compléterions', vous:'compléteriez', ils:'compléteraient' }
    },
    'compter': {
    infinitive: 'compter',
    present: { je:'compte', tu:'comptes', il:'compte', nous:'comptons', vous:'comptez', ils:'comptent' },
    'passe-compose': { je:'ai compté', tu:'as compté', il:'a compté', nous:'avons compté', vous:'avez compté', ils:'ont compté' },
    imparfait: { je:'comptais', tu:'comptais', il:'comptait', nous:'comptions', vous:'comptiez', ils:'comptaient' },
    'futur-proche': { je:'vais compter', tu:'vas compter', il:'va compter', nous:'allons compter', vous:'allez compter', ils:'vont compter' },
    'futur-simple': { je:'compterai', tu:'compteras', il:'comptera', nous:'compterons', vous:'compterez', ils:'compteront' },
    'conditionnel-present': { je:'compterais', tu:'compterais', il:'compterait', nous:'compterions', vous:'compteriez', ils:'compteraient' }
    },
    'continuer': {
    infinitive: 'continuer',
    present: { je:'continue', tu:'continues', il:'continue', nous:'continuons', vous:'continuez', ils:'continuent' },
    'passe-compose': { je:'ai continué', tu:'as continué', il:'a continué', nous:'avons continué', vous:'avez continué', ils:'ont continué' },
    imparfait: { je:'continuais', tu:'continuais', il:'continuait', nous:'continuions', vous:'continuiez', ils:'continuaient' },
    'futur-proche': { je:'vais continuer', tu:'vas continuer', il:'va continuer', nous:'allons continuer', vous:'allez continuer', ils:'vont continuer' },
    'futur-simple': { je:'continuerai', tu:'continueras', il:'continuera', nous:'continuerons', vous:'continuerez', ils:'continueront' },
    'conditionnel-present': { je:'continuerais', tu:'continuerais', il:'continuerait', nous:'continuerions', vous:'continueriez', ils:'continueraient' }
    },
    'corriger': {
    infinitive: 'corriger',
    present: { je:'corrige', tu:'corriges', il:'corrige', nous:'corrigeons', vous:'corrigez', ils:'corrigent' },
    'passe-compose': { je:'ai corrigé', tu:'as corrigé', il:'a corrigé', nous:'avons corrigé', vous:'avez corrigé', ils:'ont corrigé' },
    imparfait: { je:'corrigeais', tu:'corrigeais', il:'corrigeait', nous:'corrigions', vous:'corrigiez', ils:'corrigeaient' },
    'futur-proche': { je:'vais corriger', tu:'vas corriger', il:'va corriger', nous:'allons corriger', vous:'allez corriger', ils:'vont corriger' },
    'futur-simple': { je:'corrigerai', tu:'corrigeras', il:'corrigera', nous:'corrigerons', vous:'corrigerez', ils:'corrigeront' },
    'conditionnel-present': { je:'corrigerais', tu:'corrigerais', il:'corrigerait', nous:'corrigerions', vous:'corrigeriez', ils:'corrigeraient' }
    },
    'couper': {
    infinitive: 'couper',
    present: { je:'coupe', tu:'coupes', il:'coupe', nous:'coupons', vous:'coupez', ils:'coupent' },
    'passe-compose': { je:'ai coupé', tu:'as coupé', il:'a coupé', nous:'avons coupé', vous:'avez coupé', ils:'ont coupé' },
    imparfait: { je:'coupais', tu:'coupais', il:'coupait', nous:'coupions', vous:'coupiez', ils:'coupaient' },
    'futur-proche': { je:'vais couper', tu:'vas couper', il:'va couper', nous:'allons couper', vous:'allez couper', ils:'vont couper' },
    'futur-simple': { je:'couperai', tu:'couperas', il:'coupera', nous:'couperons', vous:'couperez', ils:'couperont' },
    'conditionnel-present': { je:'couperais', tu:'couperais', il:'couperait', nous:'couperions', vous:'couperiez', ils:'couperaient' }
    },
    'créer': {
    infinitive: 'créer',
    present: { je:'crée', tu:'crées', il:'crée', nous:'créons', vous:'créez', ils:'créent' },
    'passe-compose': { je:'ai créé', tu:'as créé', il:'a créé', nous:'avons créé', vous:'avez créé', ils:'ont créé' },
    imparfait: { je:'créais', tu:'créais', il:'créait', nous:'créions', vous:'créiez', ils:'créaient' },
    'futur-proche': { je:'vais créer', tu:'vas créer', il:'va créer', nous:'allons créer', vous:'allez créer', ils:'vont créer' },
    'futur-simple': { je:'créerai', tu:'créeras', il:'créera', nous:'créerons', vous:'créerez', ils:'créeront' },
    'conditionnel-present': { je:'créerais', tu:'créerais', il:'créerait', nous:'créerions', vous:'créeriez', ils:'créeraient' }
    },
    'critiquer': {
    infinitive: 'critiquer',
    present: { je:'critique', tu:'critiques', il:'critique', nous:'critiquons', vous:'critiquez', ils:'critiquent' },
    'passe-compose': { je:'ai critiqué', tu:'as critiqué', il:'a critiqué', nous:'avons critiqué', vous:'avez critiqué', ils:'ont critiqué' },
    imparfait: { je:'critiquais', tu:'critiquais', il:'critiquait', nous:'critiquions', vous:'critiquiez', ils:'critiquaient' },
    'futur-proche': { je:'vais critiquer', tu:'vas critiquer', il:'va critiquer', nous:'allons critiquer', vous:'allez critiquer', ils:'vont critiquer' },
    'futur-simple': { je:'critiquerai', tu:'critiqueras', il:'critiquera', nous:'critiquerons', vous:'critiquerez', ils:'critiqueront' },
    'conditionnel-present': { je:'critiquerais', tu:'critiquerais', il:'critiquerait', nous:'critiquerions', vous:'critiqueriez', ils:'critiqueraient' }
    },
    'décider': {
    infinitive: 'décider',
    present: { je:'décide', tu:'décides', il:'décide', nous:'décidons', vous:'décidez', ils:'décident' },
    'passe-compose': { je:'ai décidé', tu:'as décidé', il:'a décidé', nous:'avons décidé', vous:'avez décidé', ils:'ont décidé' },
    imparfait: { je:'décidais', tu:'décidais', il:'décidait', nous:'décidions', vous:'décidiez', ils:'décidaient' },
    'futur-proche': { je:'vais décider', tu:'vas décider', il:'va décider', nous:'allons décider', vous:'allez décider', ils:'vont décider' },
    'futur-simple': { je:'déciderai', tu:'décideras', il:'décidera', nous:'déciderons', vous:'déciderez', ils:'décideront' },
    'conditionnel-present': { je:'déciderais', tu:'déciderais', il:'déciderait', nous:'déciderions', vous:'décideriez', ils:'décideraient' }
    },
    'déjeuner': {
    infinitive: 'déjeuner',
    present: { je:'déjeune', tu:'déjeunes', il:'déjeune', nous:'déjeunons', vous:'déjeunez', ils:'déjeunent' },
    'passe-compose': { je:'ai déjeuné', tu:'as déjeuné', il:'a déjeuné', nous:'avons déjeuné', vous:'avez déjeuné', ils:'ont déjeuné' },
    imparfait: { je:'déjeunais', tu:'déjeunais', il:'déjeunait', nous:'déjeunions', vous:'déjeuniez', ils:'déjeunaient' },
    'futur-proche': { je:'vais déjeuner', tu:'vas déjeuner', il:'va déjeuner', nous:'allons déjeuner', vous:'allez déjeuner', ils:'vont déjeuner' },
    'futur-simple': { je:'déjeunerai', tu:'déjeuneras', il:'déjeunera', nous:'déjeunerons', vous:'déjeunerez', ils:'déjeuneront' },
    'conditionnel-present': { je:'déjeunerais', tu:'déjeunerais', il:'déjeunerait', nous:'déjeunerions', vous:'déjeuneriez', ils:'déjeuneraient' }
    },
    'détester': {
    infinitive: 'détester',
    present: { je:'déteste', tu:'détestes', il:'déteste', nous:'détestons', vous:'détestez', ils:'détestent' },
    'passe-compose': { je:'ai détesté', tu:'as détesté', il:'a détesté', nous:'avons détesté', vous:'avez détesté', ils:'ont détesté' },
    imparfait: { je:'détestais', tu:'détestais', il:'détestait', nous:'détestions', vous:'détestiez', ils:'détestaient' },
    'futur-proche': { je:'vais détester', tu:'vas détester', il:'va détester', nous:'allons détester', vous:'allez détester', ils:'vont détester' },
    'futur-simple': { je:'détesterai', tu:'détesteras', il:'détestera', nous:'détesterons', vous:'détesterez', ils:'détesteront' },
    'conditionnel-present': { je:'détesterais', tu:'détesterais', il:'détesterait', nous:'détesterions', vous:'détesteriez', ils:'détesteraient' }
    },
    'discuter': {
    infinitive: 'discuter',
    present: { je:'discute', tu:'discutes', il:'discute', nous:'discutons', vous:'discutez', ils:'discutent' },
    'passe-compose': { je:'ai discuté', tu:'as discuté', il:'a discuté', nous:'avons discuté', vous:'avez discuté', ils:'ont discuté' },
    imparfait: { je:'discutais', tu:'discutais', il:'discutait', nous:'discutions', vous:'discutiez', ils:'discutaient' },
    'futur-proche': { je:'vais discuter', tu:'vas discuter', il:'va discuter', nous:'allons discuter', vous:'allez discuter', ils:'vont discuter' },
    'futur-simple': { je:'discuterai', tu:'discuteras', il:'discutera', nous:'discuterons', vous:'discuterez', ils:'discuteront' },
    'conditionnel-present': { je:'discuterais', tu:'discuterais', il:'discuterait', nous:'discuterions', vous:'discuteriez', ils:'discuteraient' }
    },
    'durer': {
    infinitive: 'durer',
    present: { je:'dure', tu:'dures', il:'dure', nous:'durons', vous:'durez', ils:'durent' },
    'passe-compose': { je:'ai duré', tu:'as duré', il:'a duré', nous:'avons duré', vous:'avez duré', ils:'ont duré' },
    imparfait: { je:'durais', tu:'durais', il:'durait', nous:'durions', vous:'duriez', ils:'duraient' },
    'futur-proche': { je:'vais durer', tu:'vas durer', il:'va durer', nous:'allons durer', vous:'allez durer', ils:'vont durer' },
    'futur-simple': { je:'durerai', tu:'dureras', il:'durera', nous:'durerons', vous:'durerez', ils:'dureront' },
    'conditionnel-present': { je:'durerais', tu:'durerais', il:'durerait', nous:'durerions', vous:'durerez', ils:'dureraient' }
    },
    'emmener': {
    infinitive: 'emmener',
    present: { je:'emmène', tu:'emmènes', il:'emmène', nous:'emmenons', vous:'emmenez', ils:'emmènent' },
    'passe-compose': { je:'ai emmené', tu:'as emmené', il:'a emmené', nous:'avons emmené', vous:'avez emmené', ils:'ont emmené' },
    imparfait: { je:'emmenais', tu:'emmenais', il:'emmenait', nous:'emmenions', vous:'emmeniez', ils:'emmenaient' },
    'futur-proche': { je:'vais emmener', tu:'vas emmener', il:'va emmener', nous:'allons emmener', vous:'allez emmener', ils:'vont emmener' },
    'futur-simple': { je:'emmènerai', tu:'emmèneras', il:'emmènera', nous:'emmènerons', vous:'emmènerez', ils:'emmèneront' },
    'conditionnel-present': { je:'emmènerais', tu:'emmènerais', il:'emmènerait', nous:'emmènerions', vous:'emmèneriez', ils:'emmèneraient' }
    },
    'enlever': {
    infinitive: 'enlever',
    present: { je:'enlève', tu:'enlèves', il:'enlève', nous:'enlevons', vous:'enlevez', ils:'enlèvent' },
    'passe-compose': { je:'ai enlevé', tu:'as enlevé', il:'a enlevé', nous:'avons enlevé', vous:'avez enlevé', ils:'ont enlevé' },
    imparfait: { je:'enlevais', tu:'enlevais', il:'enlevait', nous:'enlevions', vous:'enleviez', ils:'enlevaient' },
    'futur-proche': { je:'vais enlever', tu:'vas enlever', il:'va enlever', nous:'allons enlever', vous:'allez enlever', ils:'vont enlever' },
    'futur-simple': { je:'enlèverai', tu:'enlèveras', il:'enlèvera', nous:'enlèverons', vous:'enlèverez', ils:'enlèveront' },
    'conditionnel-present': { je:'enlèverais', tu:'enlèverais', il:'enlèverait', nous:'enlèverions', vous:'enlèveriez', ils:'enlèveraient' }
    },
    'engager': {
    infinitive: 'engager',
    present: { je:'engage', tu:'engages', il:'engage', nous:'engageons', vous:'engagez', ils:'engagent' },
    'passe-compose': { je:'ai engagé', tu:'as engagé', il:'a engagé', nous:'avons engagé', vous:'avez engagé', ils:'ont engagé' },
    imparfait: { je:'engageais', tu:'engageais', il:'engageait', nous:'engagions', vous:'engagiez', ils:'engageaient' },
    'futur-proche': { je:'vais engager', tu:'vas engager', il:'va engager', nous:'allons engager', vous:'allez engager', ils:'vont engager' },
    'futur-simple': { je:'engagerai', tu:'engageras', il:'engagera', nous:'engagerons', vous:'engagerez', ils:'engageront' },
    'conditionnel-present': { je:'engagerais', tu:'engagerais', il:'engagerait', nous:'engagerions', vous:'engageriez', ils:'engageraient' }
    },
    'épouser': {
    infinitive: 'épouser',
    present: { je:'épouse', tu:'épouses', il:'épouse', nous:'épousons', vous:'épousez', ils:'épousent' },
    'passe-compose': { je:'ai épousé', tu:'as épousé', il:'a épousé', nous:'avons épousé', vous:'avez épousé', ils:'ont épousé' },
    imparfait: { je:'épousais', tu:'épousais', il:'épousait', nous:'épousions', vous:'épousiez', ils:'épousaient' },
    'futur-proche': { je:'vais épouser', tu:'vas épouser', il:'va épouser', nous:'allons épouser', vous:'allez épouser', ils:'vont épouser' },
    'futur-simple': { je:'épouserai', tu:'épouseras', il:'épousera', nous:'épouserons', vous:'épouserez', ils:'épouseront' },
    'conditionnel-present': { je:'épouserais', tu:'épouserais', il:'épouserait', nous:'épouserions', vous:'épouseriez', ils:'épouseraient' }
    },
    'expliquer': {
    infinitive: 'expliquer',
    present: { je:'explique', tu:'expliques', il:'explique', nous:'expliquons', vous:'expliquez', ils:'expliquent' },
    'passe-compose': { je:'ai expliqué', tu:'as expliqué', il:'a expliqué', nous:'avons expliqué', vous:'avez expliqué', ils:'ont expliqué' },
    imparfait: { je:'expliquais', tu:'expliquais', il:'expliquait', nous:'expliquions', vous:'expliquiez', ils:'expliquaient' },
    'futur-proche': { je:'vais expliquer', tu:'vas expliquer', il:'va expliquer', nous:'allons expliquer', vous:'allez expliquer', ils:'vont expliquer' },
    'futur-simple': { je:'expliquerai', tu:'expliqueras', il:'expliquera', nous:'expliquerons', vous:'expliquerez', ils:'expliqueront' },
    'conditionnel-present': { je:'expliquerais', tu:'expliquerais', il:'expliquerait', nous:'expliquerions', vous:'expliqueriez', ils:'expliqueraient' }
    },
    'gagner': {
    infinitive: 'gagner',
    present: { je:'gagne', tu:'gagnes', il:'gagne', nous:'gagnons', vous:'gagnez', ils:'gagnent' },
    'passe-compose': { je:'ai gagné', tu:'as gagné', il:'a gagné', nous:'avons gagné', vous:'avez gagné', ils:'ont gagné' },
    imparfait: { je:'gagnais', tu:'gagnais', il:'gagnait', nous:'gagnions', vous:'gagniez', ils:'gagnaient' },
    'futur-proche': { je:'vais gagner', tu:'vas gagner', il:'va gagner', nous:'allons gagner', vous:'allez gagner', ils:'vont gagner' },
    'futur-simple': { je:'gagnerai', tu:'gagneras', il:'gagnera', nous:'gagnerons', vous:'gagnerez', ils:'gagneront' },
    'conditionnel-present': { je:'gagnerais', tu:'gagnerais', il:'gagnerait', nous:'gagnerions', vous:'gagneriez', ils:'gagneraient' }
    },
    'habiller': {
    infinitive: 'habiller',
    present: { je:'habille', tu:'habilles', il:'habille', nous:'habillons', vous:'habillez', ils:'habillent' },
    'passe-compose': { je:'ai habillé', tu:'as habillé', il:'a habillé', nous:'avons habillé', vous:'avez habillé', ils:'ont habillé' },
    imparfait: { je:'habillais', tu:'habillais', il:'habillait', nous:'habillions', vous:'habilliez', ils:'habillaient' },
    'futur-proche': { je:'vais habiller', tu:'vas habiller', il:'va habiller', nous:'allons habiller', vous:'allez habiller', ils:'vont habiller' },
    'futur-simple': { je:'habillerai', tu:'habilleras', il:'habillera', nous:'habillerons', vous:'habillerez', ils:'habilleront' },
    'conditionnel-present': { je:'habillerais', tu:'habillerais', il:'habillerait', nous:'habillerions', vous:'habilleriez', ils:'habilleraient' }
    },
    'jeter': {
    infinitive: 'jeter',
    present: { je:'jette', tu:'jettes', il:'jette', nous:'jetons', vous:'jetez', ils:'jettent' },
    'passe-compose': { je:'ai jeté', tu:'as jeté', il:'a jeté', nous:'avons jeté', vous:'avez jeté', ils:'ont jeté' },
    imparfait: { je:'jetais', tu:'jetais', il:'jetait', nous:'jetions', vous:'jetiez', ils:'jetaient' },
    'futur-proche': { je:'vais jeter', tu:'vas jeter', il:'va jeter', nous:'allons jeter', vous:'allez jeter', ils:'vont jeter' },
    'futur-simple': { je:'jetterai', tu:'jetteras', il:'jettera', nous:'jetterons', vous:'jetterez', ils:'jetteront' },
    'conditionnel-present': { je:'jetterais', tu:'jetterais', il:'jetterait', nous:'jetterions', vous:'jetteriez', ils:'jetteraient' }
    },
    'laisser': {
    infinitive: 'laisser',
    present: { je:'laisse', tu:'laisses', il:'laisse', nous:'laissons', vous:'laissez', ils:'laissent' },
    'passe-compose': { je:'ai laissé', tu:'as laissé', il:'a laissé', nous:'avons laissé', vous:'avez laissé', ils:'ont laissé' },
    imparfait: { je:'laissais', tu:'laissais', il:'laissait', nous:'laissions', vous:'laissiez', ils:'laissaient' },
    'futur-proche': { je:'vais laisser', tu:'vas laisser', il:'va laisser', nous:'allons laisser', vous:'allez laisser', ils:'vont laisser' },
    'futur-simple': { je:'laisserai', tu:'laisseras', il:'laissera', nous:'laisserons', vous:'laisserez', ils:'laisseront' },
    'conditionnel-present': { je:'laisserais', tu:'laisserais', il:'laisserait', nous:'laisserions', vous:'laisseriez', ils:'laisseraient' }
    },
    'lever': {
    infinitive: 'lever',
    present: { je:'lève', tu:'lèves', il:'lève', nous:'levons', vous:'levez', ils:'lèvent' },
    'passe-compose': { je:'ai levé', tu:'as levé', il:'a levé', nous:'avons levé', vous:'avez levé', ils:'ont levé' },
    imparfait: { je:'levais', tu:'levais', il:'levait', nous:'levions', vous:'leviez', ils:'levaient' },
    'futur-proche': { je:'vais lever', tu:'vas lever', il:'va lever', nous:'allons lever', vous:'allez lever', ils:'vont lever' },
    'futur-simple': { je:'lèverai', tu:'lèveras', il:'lèvera', nous:'lèverons', vous:'lèverez', ils:'lèveront' },
    'conditionnel-present': { je:'lèverais', tu:'lèverais', il:'lèverait', nous:'lèverions', vous:'lèveriez', ils:'lèveraient' }
    },
    'louer': {
    infinitive: 'louer',
    present: { je:'loue', tu:'loues', il:'loue', nous:'louons', vous:'louez', ils:'louent' },
    'passe-compose': { je:'ai loué', tu:'as loué', il:'a loué', nous:'avons loué', vous:'avez loué', ils:'ont loué' },
    imparfait: { je:'louais', tu:'louais', il:'louait', nous:'louions', vous:'louiez', ils:'louaient' },
    'futur-proche': { je:'vais louer', tu:'vas louer', il:'va louer', nous:'allons louer', vous:'allez louer', ils:'vont louer' },
    'futur-simple': { je:'louerai', tu:'loueras', il:'louera', nous:'louerons', vous:'louerez', ils:'loueront' },
    'conditionnel-present': { je:'louerais', tu:'louerais', il:'louerait', nous:'louerions', vous:'loueriez', ils:'loueraient' }
    },
    'pleurer': {
    infinitive: 'pleurer',
    present: { je:'pleure', tu:'pleures', il:'pleure', nous:'pleurons', vous:'pleurez', ils:'pleurent' },
    'passe-compose': { je:'ai pleuré', tu:'as pleuré', il:'a pleuré', nous:'avons pleuré', vous:'avez pleuré', ils:'ont pleuré' },
    imparfait: { je:'pleurais', tu:'pleurais', il:'pleurait', nous:'pleurions', vous:'pleuriez', ils:'pleuraient' },
    'futur-proche': { je:'vais pleurer', tu:'vas pleurer', il:'va pleurer', nous:'allons pleurer', vous:'allez pleurer', ils:'vont pleurer' },
    'futur-simple': { je:'pleurerai', tu:'pleureras', il:'pleurera', nous:'pleurerons', vous:'pleurerez', ils:'pleureront' },
    'conditionnel-present': { je:'pleurerais', tu:'pleurerais', il:'pleurerait', nous:'pleurerions', vous:'pleureriez', ils:'pleureraient' }
    },
    'quitter': {
    infinitive: 'quitter',
    present: { je:'quitte', tu:'quittes', il:'quitte', nous:'quittons', vous:'quittez', ils:'quittent' },
    'passe-compose': { je:'ai quitté', tu:'as quitté', il:'a quitté', nous:'avons quitté', vous:'avez quitté', ils:'ont quitté' },
    imparfait: { je:'quittais', tu:'quittais', il:'quittait', nous:'quittions', vous:'quittiez', ils:'quittaient' },
    'futur-proche': { je:'vais quitter', tu:'vas quitter', il:'va quitter', nous:'allons quitter', vous:'allez quitter', ils:'vont quitter' },
    'futur-simple': { je:'quitterai', tu:'quitteras', il:'quittera', nous:'quitterons', vous:'quitterez', ils:'quitteront' },
    'conditionnel-present': { je:'quitterais', tu:'quitterais', il:'quitterait', nous:'quitterions', vous:'quitteriez', ils:'quitteraient' }
    },
    'ranger': {
    infinitive: 'ranger',
    present: { je:'range', tu:'ranges', il:'range', nous:'rangeons', vous:'rangez', ils:'rangent' },
    'passe-compose': { je:'ai rangé', tu:'as rangé', il:'a rangé', nous:'avons rangé', vous:'avez rangé', ils:'ont rangé' },
    imparfait: { je:'rangeais', tu:'rangeais', il:'rangeait', nous:'rangions', vous:'rangiez', ils:'rangeaient' },
    'futur-proche': { je:'vais ranger', tu:'vas ranger', il:'va ranger', nous:'allons ranger', vous:'allez ranger', ils:'vont ranger' },
    'futur-simple': { je:'rangerai', tu:'rangeras', il:'rangera', nous:'rangerons', vous:'rangerez', ils:'rangeront' },
    'conditionnel-present': { je:'rangerais', tu:'rangerais', il:'rangerait', nous:'rangerions', vous:'rangeriez', ils:'rangeraient' }
    },
    'recommencer': {
    infinitive: 'recommencer',
    present: { je:'recommence', tu:'recommences', il:'recommence', nous:'recommençons', vous:'recommencez', ils:'recommencent' },
    'passe-compose': { je:'ai recommencé', tu:'as recommencé', il:'a recommencé', nous:'avons recommencé', vous:'avez recommencé', ils:'ont recommencé' },
    imparfait: { je:'recommençais', tu:'recommençais', il:'recommençait', nous:'recommencions', vous:'recommenciez', ils:'recommençaient' },
    'futur-proche': { je:'vais recommencer', tu:'vas recommencer', il:'va recommencer', nous:'allons recommencer', vous:'allez recommencer', ils:'vont recommencer' },
    'futur-simple': { je:'recommencerai', tu:'recommenceras', il:'recommencera', nous:'recommencerons', vous:'recommencerez', ils:'recommenceront' },
    'conditionnel-present': { je:'recommencerais', tu:'recommencerais', il:'recommencerait', nous:'recommencerions', vous:'recommenceriez', ils:'recommenceraient' }
    },
    'saluer': {
    infinitive: 'saluer',
    present: { je:'salue', tu:'salues', il:'salue', nous:'saluons', vous:'saluez', ils:'saluent' },
    'passe-compose': { je:'ai salué', tu:'as salué', il:'a salué', nous:'avons salué', vous:'avez salué', ils:'ont salué' },
    imparfait: { je:'saluais', tu:'saluais', il:'saluait', nous:'saluions', vous:'saluiez', ils:'saluaient' },
    'futur-proche': { je:'vais saluer', tu:'vas saluer', il:'va saluer', nous:'allons saluer', vous:'allez saluer', ils:'vont saluer' },
    'futur-simple': { je:'saluerai', tu:'salueras', il:'saluera', nous:'saluerons', vous:'saluerez', ils:'salueront' },
    'conditionnel-present': { je:'saluerais', tu:'saluerais', il:'saluerait', nous:'saluerions', vous:'salueriez', ils:'salueraient' }
    },
    'traverser': {
    infinitive: 'traverser',
    present: { je:'traverse', tu:'traverses', il:'traverse', nous:'traversons', vous:'traversez', ils:'traversent' },
    'passe-compose': { je:'ai traversé', tu:'as traversé', il:'a traversé', nous:'avons traversé', vous:'avez traversé', ils:'ont traversé' },
    imparfait: { je:'traversais', tu:'traversais', il:'traversait', nous:'traversions', vous:'traversiez', ils:'traversaient' },
    'futur-proche': { je:'vais traverser', tu:'vas traverser', il:'va traverser', nous:'allons traverser', vous:'allez traverser', ils:'vont traverser' },
    'futur-simple': { je:'traverserai', tu:'traverseras', il:'traversera', nous:'traverserons', vous:'traverserez', ils:'traverseront' },
    'conditionnel-present': { je:'traverserais', tu:'traverserais', il:'traverserait', nous:'traverserions', vous:'traverseriez', ils:'traverseraient' }
    },
    'manger': {
    infinitive: 'manger',
    present: { je:'mange', tu:'manges', il:'mange', nous:'mangeons', vous:'mangez', ils:'mangent' },
    'passe-compose': { je:'ai mangé', tu:'as mangé', il:'a mangé', nous:'avons mangé', vous:'avez mangé', ils:'ont mangé' },
    imparfait: { je:'mangeais', tu:'mangeais', il:'mangeait', nous:'mangions', vous:'mangiez', ils:'mangeaient' },
    'futur-proche': { je:'vais manger', tu:'vas manger', il:'va manger', nous:'allons manger', vous:'allez manger', ils:'vont manger' },
    'futur-simple': { je:'mangerai', tu:'mangeras', il:'mangera', nous:'mangerons', vous:'mangerez', ils:'mangeront' },
    'conditionnel-present': { je:'mangerais', tu:'mangerais', il:'mangerait', nous:'mangerions', vous:'mangeriez', ils:'mangeraient' }
    },
    'finir': {
    infinitive: 'finir',
    present: { je:'finis', tu:'finis', il:'finit', nous:'finissons', vous:'finissez', ils:'finissent' },
    'passe-compose': { je:'ai fini', tu:'as fini', il:'a fini', nous:'avons fini', vous:'avez fini', ils:'ont fini' },
    imparfait: { je:'finissais', tu:'finissais', il:'finissait', nous:'finissions', vous:'finissiez', ils:'finissaient' },
    'futur-proche': { je:'vais finir', tu:'vas finir', il:'va finir', nous:'allons finir', vous:'allez finir', ils:'vont finir' },
    'futur-simple': { je:'finirai', tu:'finiras', il:'finira', nous:'finirons', vous:'finirez', ils:'finiront' },
    'conditionnel-present': { je:'finirais', tu:'finirais', il:'finirait', nous:'finirions', vous:'finiriez', ils:'finiraient' }
    },
    'choisir': {
    infinitive: 'choisir',
    present: { je:'choisis', tu:'choisis', il:'choisit', nous:'choisissons', vous:'choisissez', ils:'choisissent' },
    'passe-compose': { je:'ai choisi', tu:'as choisi', il:'a choisi', nous:'avons choisi', vous:'avez choisi', ils:'ont choisi' },
    imparfait: { je:'choisissais', tu:'choisissais', il:'choisissait', nous:'choisissions', vous:'choisissiez', ils:'choisissaient' },
    'futur-proche': { je:'vais choisir', tu:'vas choisir', il:'va choisir', nous:'allons choisir', vous:'allez choisir', ils:'vont choisir' },
    'futur-simple': { je:'choisirai', tu:'choisiras', il:'choisira', nous:'choisirons', vous:'choisirez', ils:'choisiront' },
    'conditionnel-present': { je:'choisirais', tu:'choisirais', il:'choisirait', nous:'choisirions', vous:'choisiriez', ils:'choisiraient' }
    },
    'réussir': {
    infinitive: 'réussir',
    present: { je:'réussis', tu:'réussis', il:'réussit', nous:'réussissons', vous:'réussissez', ils:'réussissent' },
    'passe-compose': { je:'ai réussi', tu:'as réussi', il:'a réussi', nous:'avons réussi', vous:'avez réussi', ils:'ont réussi' },
    imparfait: { je:'réussissais', tu:'réussissais', il:'réussissait', nous:'réussissions', vous:'réussissiez', ils:'réussissaient' },
    'futur-proche': { je:'vais réussir', tu:'vas réussir', il:'va réussir', nous:'allons réussir', vous:'allez réussir', ils:'vont réussir' },
    'futur-simple': { je:'réussirai', tu:'réussiras', il:'réussira', nous:'réussirons', vous:'réussirez', ils:'réussiront' },
    'conditionnel-present': { je:'réussirais', tu:'réussirais', il:'réussirait', nous:'réussirions', vous:'réussiriez', ils:'réussiraient' }
    },
    'grandir': {
    infinitive: 'grandir',
    present: { je:'grandis', tu:'grandis', il:'grandit', nous:'grandissons', vous:'grandissez', ils:'grandissent' },
    'passe-compose': { je:'ai grandi', tu:'as grandi', il:'a grandi', nous:'avons grandi', vous:'avez grandi', ils:'ont grandi' },
    imparfait: { je:'grandissais', tu:'grandissais', il:'grandissait', nous:'grandissions', vous:'grandissiez', ils:'grandissaient' },
    'futur-proche': { je:'vais grandir', tu:'vas grandir', il:'va grandir', nous:'allons grandir', vous:'allez grandir', ils:'vont grandir' },
    'futur-simple': { je:'grandirai', tu:'grandiras', il:'grandira', nous:'grandirons', vous:'grandirez', ils:'grandiront' },
    'conditionnel-present': { je:'grandirais', tu:'grandirais', il:'grandirait', nous:'grandirions', vous:'grandiriez', ils:'grandiraient' }
    },
    'rougir': {
    infinitive: 'rougir',
    present: { je:'rougis', tu:'rougis', il:'rougit', nous:'rougissons', vous:'rougissez', ils:'rougissent' },
    'passe-compose': { je:'ai rougi', tu:'as rougi', il:'a rougi', nous:'avons rougi', vous:'avez rougi', ils:'ont rougi' },
    imparfait: { je:'rougissais', tu:'rougissais', il:'rougissait', nous:'rougissions', vous:'rougissiez', ils:'rougissaient' },
    'futur-proche': { je:'vais rougir', tu:'vas rougir', il:'va rougir', nous:'allons rougir', vous:'allez rougir', ils:'vont rougir' },
    'futur-simple': { je:'rougirai', tu:'rougiras', il:'rougira', nous:'rougirons', vous:'rougirez', ils:'rougiront' },
    'conditionnel-present': { je:'rougirais', tu:'rougirais', il:'rougirait', nous:'rougirions', vous:'rougiriez', ils:'rougiraient' }
    },
    'pâlir': {
    infinitive: 'pâlir',
    present: { je:'pâlis', tu:'pâlis', il:'pâlit', nous:'pâlissons', vous:'pâlissez', ils:'pâlissent' },
    'passe-compose': { je:'ai pâli', tu:'as pâli', il:'a pâli', nous:'avons pâli', vous:'avez pâli', ils:'ont pâli' },
    imparfait: { je:'pâlissais', tu:'pâlissais', il:'pâlissait', nous:'pâlissions', vous:'pâlissiez', ils:'pâlissaient' },
    'futur-proche': { je:'vais pâlir', tu:'vas pâlir', il:'va pâlir', nous:'allons pâlir', vous:'allez pâlir', ils:'vont pâlir' },
    'futur-simple': { je:'pâlirai', tu:'pâliras', il:'pâlira', nous:'pâlirons', vous:'pâlirez', ils:'pâliront' },
    'conditionnel-present': { je:'pâlirais', tu:'pâlirais', il:'pâlirait', nous:'pâlirions', vous:'pâliriez', ils:'pâliraient' }
    },
    'vieillir': {
    infinitive: 'vieillir',
    present: { je:'vieillis', tu:'vieillis', il:'vieillit', nous:'vieillissons', vous:'vieillissez', ils:'vieillissent' },
    'passe-compose': { je:'ai vieilli', tu:'as vieilli', il:'a vieilli', nous:'avons vieilli', vous:'avez vieilli', ils:'ont vieilli' },
    imparfait: { je:'vieillissais', tu:'vieillissais', il:'vieillissait', nous:'vieillissions', vous:'vieillissiez', ils:'vieillissaient' },
    'futur-proche': { je:'vais vieillir', tu:'vas vieillir', il:'va vieillir', nous:'allons vieillir', vous:'allez vieillir', ils:'vont vieillir' },
    'futur-simple': { je:'vieillirai', tu:'vieilliras', il:'vieillira', nous:'vieillirons', vous:'vieillirez', ils:'vieilliront' },
    'conditionnel-present': { je:'vieillirais', tu:'vieillirais', il:'vieillirait', nous:'vieillirions', vous:'vieilliriez', ils:'vieilliraient' }
    },
    'réfléchir': {
    infinitive: 'réfléchir',
    present: { je:'réfléchis', tu:'réfléchis', il:'réfléchit', nous:'réfléchissons', vous:'réfléchissez', ils:'réfléchissent' },
    'passe-compose': { je:'ai réfléchi', tu:'as réfléchi', il:'a réfléchi', nous:'avons réfléchi', vous:'avez réfléchi', ils:'ont réfléchi' },
    imparfait: { je:'réfléchissais', tu:'réfléchissais', il:'réfléchissait', nous:'réfléchissions', vous:'réfléchissiez', ils:'réfléchissaient' },
    'futur-proche': { je:'vais réfléchir', tu:'vas réfléchir', il:'va réfléchir', nous:'allons réfléchir', vous:'allez réfléchir', ils:'vont réfléchir' },
    'futur-simple': { je:'réfléchirai', tu:'réfléchiras', il:'réfléchira', nous:'réfléchirons', vous:'réfléchirez', ils:'réfléchiront' },
    'conditionnel-present': { je:'réfléchirais', tu:'réfléchirais', il:'réfléchirait', nous:'réfléchirions', vous:'réfléchiriez', ils:'réfléchiraient' }
    },
    'agir': {
    infinitive: 'agir',
    present: { je:'agis', tu:'agis', il:'agit', nous:'agissons', vous:'agissez', ils:'agissent' },
    'passe-compose': { je:'ai agi', tu:'as agi', il:'a agi', nous:'avons agi', vous:'avez agi', ils:'ont agi' },
    imparfait: { je:'agissais', tu:'agissais', il:'agissait', nous:'agissions', vous:'agissiez', ils:'agissaient' },
    'futur-proche': { je:'vais agir', tu:'vas agir', il:'va agir', nous:'allons agir', vous:'allez agir', ils:'vont agir' },
    'futur-simple': { je:'agirai', tu:'agiras', il:'agira', nous:'agirons', vous:'agirez', ils:'agiront' },
    'conditionnel-present': { je:'agirais', tu:'agirais', il:'agirait', nous:'agirions', vous:'agiriez', ils:'agiraient' }
    },
    'bâtir': {
    infinitive: 'bâtir',
    present: { je:'bâtis', tu:'bâtis', il:'bâtit', nous:'bâtissons', vous:'bâtissez', ils:'bâtissent' },
    'passe-compose': { je:'ai bâti', tu:'as bâti', il:'a bâti', nous:'avons bâti', vous:'avez bâti', ils:'ont bâti' },
    imparfait: { je:'bâtissais', tu:'bâtissais', il:'bâtissait', nous:'bâtissions', vous:'bâtissiez', ils:'bâtissaient' },
    'futur-proche': { je:'vais bâtir', tu:'vas bâtir', il:'va bâtir', nous:'allons bâtir', vous:'allez bâtir', ils:'vont bâtir' },
    'futur-simple': { je:'bâtirai', tu:'bâtiras', il:'bâtira', nous:'bâtirons', vous:'bâtirez', ils:'bâtiront' },
    'conditionnel-present': { je:'bâtirais', tu:'bâtirais', il:'bâtirait', nous:'bâtirions', vous:'bâtiriez', ils:'bâtiraient' }
    },
    'désobéir': {
    infinitive: 'désobéir',
    present: { je:'désobéis', tu:'désobéis', il:'désobéit', nous:'désobéissons', vous:'désobéissez', ils:'désobéissent' },
    'passe-compose': { je:'ai désobéi', tu:'as désobéi', il:'a désobéi', nous:'avons désobéi', vous:'avez désobéi', ils:'ont désobéi' },
    imparfait: { je:'désobéissais', tu:'désobéissais', il:'désobéissait', nous:'désobéissions', vous:'désobéissiez', ils:'désobéissaient' },
    'futur-proche': { je:'vais désobéir', tu:'vas désobéir', il:'va désobéir', nous:'allons désobéir', vous:'allez désobéir', ils:'vont désobéir' },
    'futur-simple': { je:'désobéirai', tu:'désobéiras', il:'désobéira', nous:'désobéirons', vous:'désobéirez', ils:'désobéiront' },
    'conditionnel-present': { je:'désobéirais', tu:'désobéirais', il:'désobéirait', nous:'désobéirions', vous:'désobéiriez', ils:'désobéiraient' }
    },
    'obéir': {
    infinitive: 'obéir',
    present: { je:'obéis', tu:'obéis', il:'obéit', nous:'obéissons', vous:'obéissez', ils:'obéissent' },
    'passe-compose': { je:'ai obéi', tu:'as obéi', il:'a obéi', nous:'avons obéi', vous:'avez obéi', ils:'ont obéi' },
    imparfait: { je:'obéissais', tu:'obéissais', il:'obéissait', nous:'obéissions', vous:'obéissiez', ils:'obéissaient' },
    'futur-proche': { je:'vais obéir', tu:'vas obéir', il:'va obéir', nous:'allons obéir', vous:'allez obéir', ils:'vont obéir' },
    'futur-simple': { je:'obéirai', tu:'obéiras', il:'obéira', nous:'obéirons', vous:'obéirez', ils:'obéiront' },
    'conditionnel-present': { je:'obéirais', tu:'obéirais', il:'obéirait', nous:'obéirions', vous:'obéiriez', ils:'obéiraient' }
    },
    'remplir': {
    infinitive: 'remplir',
    present: { je:'remplis', tu:'remplis', il:'remplit', nous:'remplissons', vous:'remplissez', ils:'remplissent' },
    'passe-compose': { je:'ai rempli', tu:'as rempli', il:'a rempli', nous:'avons rempli', vous:'avez rempli', ils:'ont rempli' },
    imparfait: { je:'remplissais', tu:'remplissais', il:'remplissait', nous:'remplissions', vous:'remplissiez', ils:'remplissaient' },
    'futur-proche': { je:'vais remplir', tu:'vas remplir', il:'va remplir', nous:'allons remplir', vous:'allez remplir', ils:'vont remplir' },
    'futur-simple': { je:'remplirai', tu:'rempliras', il:'remplira', nous:'remplirons', vous:'remplirez', ils:'rempliront' },
    'conditionnel-present': { je:'remplirais', tu:'remplirais', il:'remplirait', nous:'remplirions', vous:'rempliriez', ils:'rempliraient' }
    },
    'nourrir': {
    infinitive: 'nourrir',
    present: { je:'nourris', tu:'nourris', il:'nourrit', nous:'nourrissons', vous:'nourrissez', ils:'nourrissent' },
    'passe-compose': { je:'ai nourri', tu:'as nourri', il:'a nourri', nous:'avons nourri', vous:'avez nourri', ils:'ont nourri' },
    imparfait: { je:'nourrissais', tu:'nourrissais', il:'nourrissait', nous:'nourrissions', vous:'nourrissiez', ils:'nourrissaient' },
    'futur-proche': { je:'vais nourrir', tu:'vas nourrir', il:'va nourrir', nous:'allons nourrir', vous:'allez nourrir', ils:'vont nourrir' },
    'futur-simple': { je:'nourrirai', tu:'nourriras', il:'nourrira', nous:'nourrirons', vous:'nourrirez', ils:'nourriront' },
    'conditionnel-present': { je:'nourrirais', tu:'nourrirais', il:'nourrirait', nous:'nourririons', vous:'nourririez', ils:'nourriraient' }
    },
    'punir': {
    infinitive: 'punir',
    present: { je:'punis', tu:'punis', il:'punit', nous:'punissons', vous:'punissez', ils:'punissent' },
    'passe-compose': { je:'ai puni', tu:'as puni', il:'a puni', nous:'avons puni', vous:'avez puni', ils:'ont puni' },
    imparfait: { je:'punissais', tu:'punissais', il:'punissait', nous:'punissions', vous:'punissiez', ils:'punissaient' },
    'futur-proche': { je:'vais punir', tu:'vas punir', il:'va punir', nous:'allons punir', vous:'allez punir', ils:'vont punir' },
    'futur-simple': { je:'punirai', tu:'puniras', il:'punira', nous:'punirons', vous:'punirez', ils:'puniront' },
    'conditionnel-present': { je:'punirais', tu:'punirais', il:'punirait', nous:'punirions', vous:'puniriez', ils:'puniraient' }
    },
    'accomplir': {
    infinitive: 'accomplir',
    present: { je:'accomplis', tu:'accomplis', il:'accomplit', nous:'accomplissons', vous:'accomplissez', ils:'accomplissent' },
    'passe-compose': { je:'ai accompli', tu:'as accompli', il:'a accompli', nous:'avons accompli', vous:'avez accompli', ils:'ont accompli' },
    imparfait: { je:'accomplissais', tu:'accomplissais', il:'accomplissait', nous:'accomplissions', vous:'accomplissiez', ils:'accomplissaient' },
    'futur-proche': { je:'vais accomplir', tu:'vas accomplir', il:'va accomplir', nous:'allons accomplir', vous:'allez accomplir', ils:'vont accomplir' },
    'futur-simple': { je:'accomplirai', tu:'accompliras', il:'accomplira', nous:'accomplirons', vous:'accomplirez', ils:'accompliront' },
    'conditionnel-present': { je:'accomplirais', tu:'accomplirais', il:'accomplirait', nous:'accomplirions', vous:'accompliriez', ils:'accompliraient' }
    },
    'applaudir': {
    infinitive: 'applaudir',
    present: { je:'applaudis', tu:'applaudis', il:'applaudit', nous:'applaudissons', vous:'applaudissez', ils:'applaudissent' },
    'passe-compose': { je:'ai applaudi', tu:'as applaudi', il:'a applaudi', nous:'avons applaudi', vous:'avez applaudi', ils:'ont applaudi' },
    imparfait: { je:'applaudissais', tu:'applaudissais', il:'applaudissait', nous:'applaudissions', vous:'applaudissiez', ils:'applaudissaient' },
    'futur-proche': { je:'vais applaudir', tu:'vas applaudir', il:'va applaudir', nous:'allons applaudir', vous:'allez applaudir', ils:'vont applaudir' },
    'futur-simple': { je:'applaudirai', tu:'applaudiras', il:'applaudira', nous:'applaudirons', vous:'applaudirez', ils:'applaudiront' },
    'conditionnel-present': { je:'applaudirais', tu:'applaudirais', il:'applaudirait', nous:'applaudirions', vous:'applaudiriez', ils:'applaudiraient' }
    },
    'définir': {
    infinitive: 'définir',
    present: { je:'définis', tu:'définis', il:'définit', nous:'définissons', vous:'définissez', ils:'définissent' },
    'passe-compose': { je:'ai défini', tu:'as défini', il:'a défini', nous:'avons défini', vous:'avez défini', ils:'ont défini' },
    imparfait: { je:'définissais', tu:'définissais', il:'définissait', nous:'définissions', vous:'définissiez', ils:'définissaient' },
    'futur-proche': { je:'vais définir', tu:'vas définir', il:'va définir', nous:'allons définir', vous:'allez définir', ils:'vont définir' },
    'futur-simple': { je:'définirai', tu:'définiras', il:'définira', nous:'définirons', vous:'définirez', ils:'définiront' },
    'conditionnel-present': { je:'définirais', tu:'définirais', il:'définirait', nous:'définirions', vous:'définiriez', ils:'définiraient' }
    },
    'établir': {
    infinitive: 'établir',
    present: { je:'établis', tu:'établis', il:'établit', nous:'établissons', vous:'établissez', ils:'établissent' },
    'passe-compose': { je:'ai établi', tu:'as établi', il:'a établi', nous:'avons établi', vous:'avez établi', ils:'ont établi' },
    imparfait: { je:'établissais', tu:'établissais', il:'établissait', nous:'établissions', vous:'établissiez', ils:'établissaient' },
    'futur-proche': { je:'vais établir', tu:'vas établir', il:'va établir', nous:'allons établir', vous:'allez établir', ils:'vont établir' },
    'futur-simple': { je:'établirai', tu:'établiras', il:'établira', nous:'établirons', vous:'établirez', ils:'établiront' },
    'conditionnel-present': { je:'établirais', tu:'établirais', il:'établirait', nous:'établirions', vous:'établiriez', ils:'établiraient' }
    },
    'fleurir': {
    infinitive: 'fleurir',
    present: { je:'fleuris', tu:'fleuris', il:'fleurit', nous:'fleurissons', vous:'fleurissez', ils:'fleurissent' },
    'passe-compose': { je:'ai fleuri', tu:'as fleuri', il:'a fleuri', nous:'avons fleuri', vous:'avez fleuri', ils:'ont fleuri' },
    imparfait: { je:'fleurissais', tu:'fleurissais', il:'fleurissait', nous:'fleurissions', vous:'fleurissiez', ils:'fleurissaient' },
    'futur-proche': { je:'vais fleurir', tu:'vas fleurir', il:'va fleurir', nous:'allons fleurir', vous:'allez fleurir', ils:'vont fleurir' },
    'futur-simple': { je:'fleurirai', tu:'fleuriras', il:'fleurira', nous:'fleurirons', vous:'fleurirez', ils:'fleuriront' },
    'conditionnel-present': { je:'fleurirais', tu:'fleurirais', il:'fleurirait', nous:'fleuririons', vous:'fleuririez', ils:'fleuriraient' }
    },
    'guérir': {
    infinitive: 'guérir',
    present: { je:'guéris', tu:'guéris', il:'guérit', nous:'guérissons', vous:'guérissez', ils:'guérissent' },
    'passe-compose': { je:'ai guéri', tu:'as guéri', il:'a guéri', nous:'avons guéri', vous:'avez guéri', ils:'ont guéri' },
    imparfait: { je:'guérissais', tu:'guérissais', il:'guérissait', nous:'guérissions', vous:'guérissiez', ils:'guérissaient' },
    'futur-proche': { je:'vais guérir', tu:'vas guérir', il:'va guérir', nous:'allons guérir', vous:'allez guérir', ils:'vont guérir' },
    'futur-simple': { je:'guérirai', tu:'guériras', il:'guérira', nous:'guérirons', vous:'guérirez', ils:'guériront' },
    'conditionnel-present': { je:'guérirais', tu:'guérirais', il:'guérirait', nous:'guéririons', vous:'guéririez', ils:'guériraient' }
    },
    'investir': {
    infinitive: 'investir',
    present: { je:'investis', tu:'investis', il:'investit', nous:'investissons', vous:'investissez', ils:'investissent' },
    'passe-compose': { je:'ai investi', tu:'as investi', il:'a investi', nous:'avons investi', vous:'avez investi', ils:'ont investi' },
    imparfait: { je:'investissais', tu:'investissais', il:'investissait', nous:'investissions', vous:'investissiez', ils:'investissaient' },
    'futur-proche': { je:'vais investir', tu:'vas investir', il:'va investir', nous:'allons investir', vous:'allez investir', ils:'vont investir' },
    'futur-simple': { je:'investirai', tu:'investiras', il:'investira', nous:'investirons', vous:'investirez', ils:'investiront' },
    'conditionnel-present': { je:'investirais', tu:'investirais', il:'investirait', nous:'investirions', vous:'investiriez', ils:'investiraient' }
    },
    'attendre': {
    infinitive: 'attendre',
    present: { je:'attends', tu:'attends', il:'attend', nous:'attendons', vous:'attendez', ils:'attendent' },
    'passe-compose': { je:'ai attendu', tu:'as attendu', il:'a attendu', nous:'avons attendu', vous:'avez attendu', ils:'ont attendu' },
    imparfait: { je:'attendais', tu:'attendais', il:'attendait', nous:'attendions', vous:'attendiez', ils:'attendaient' },
    'futur-proche': { je:'vais attendre', tu:'vas attendre', il:'va attendre', nous:'allons attendre', vous:'allez attendre', ils:'vont attendre' },
    'futur-simple': { je:'attendrai', tu:'attendras', il:'attendera', nous:'attendrons', vous:'attendrez', ils:'attendront' },
    'conditionnel-present': { je:'attendrais', tu:'attendrais', il:'attendrait', nous:'attendrions', vous:'attendriez', ils:'attendraient' }
    },
    'défendre': {
    infinitive: 'défendre',
    present: { je:'défends', tu:'défends', il:'défend', nous:'défendons', vous:'défendez', ils:'défendent' },
    'passe-compose': { je:'ai défendu', tu:'as défendu', il:'a défendu', nous:'avons défendu', vous:'avez défendu', ils:'ont défendu' },
    imparfait: { je:'défendais', tu:'défendais', il:'défendait', nous:'défendions', vous:'défendiez', ils:'défendaient' },
    'futur-proche': { je:'vais défendre', tu:'vas défendre', il:'va défendre', nous:'allons défendre', vous:'allez défendre', ils:'vont défendre' },
    'futur-simple': { je:'défendrai', tu:'défendras', il:'défendra', nous:'défendrons', vous:'défendrez', ils:'défendront' },
    'conditionnel-present': { je:'défendrais', tu:'défendrais', il:'défendrait', nous:'défendrions', vous:'défendriez', ils:'défendraient' }
    },
    'descendre': {
    infinitive: 'descendre',
    present: { je:'descends', tu:'descends', il:'descend', nous:'descendons', vous:'descendez', ils:'descendent' },
    'passe-compose': { je:'suis descendu', tu:'es descendu', il:'est descendu', nous:'sommes descendus', vous:'êtes descendus', ils:'sont descendus' },
    imparfait: { je:'descendais', tu:'descendais', il:'descendait', nous:'descendions', vous:'descendiez', ils:'descendaient' },
    'futur-proche': { je:'vais descendre', tu:'vas descendre', il:'va descendre', nous:'allons descendre', vous:'allez descendre', ils:'vont descendre' },
    'futur-simple': { je:'descendrai', tu:'descendras', il:'descendra', nous:'descendrons', vous:'descendrez', ils:'descendront' },
    'conditionnel-present': { je:'descendrais', tu:'descendrais', il:'descendrait', nous:'descendrions', vous:'descendriez', ils:'descendraient' }
    },
    'entendre': {
    infinitive: 'entendre',
    present: { je:'entends', tu:'entends', il:'entend', nous:'entendons', vous:'entendez', ils:'entendent' },
    'passe-compose': { je:'ai entendu', tu:'as entendu', il:'a entendu', nous:'avons entendu', vous:'avez entendu', ils:'ont entendu' },
    imparfait: { je:'entendais', tu:'entendais', il:'entendait', nous:'entendions', vous:'entendiez', ils:'entendaient' },
    'futur-proche': { je:'vais entendre', tu:'vas entendre', il:'va entendre', nous:'allons entendre', vous:'allez entendre', ils:'vont entendre' },
    'futur-simple': { je:'entendrai', tu:'entendras', il:'entendra', nous:'entendrons', vous:'entendrez', ils:'entendront' },
    'conditionnel-present': { je:'entendrais', tu:'entendrais', il:'entendrait', nous:'entendrions', vous:'entendriez', ils:'entendraient' }
    },
    'perdre': {
    infinitive: 'perdre',
    present: { je:'perds', tu:'perds', il:'perd', nous:'perdons', vous:'perdez', ils:'perdent' },
    'passe-compose': { je:'ai perdu', tu:'as perdu', il:'a perdu', nous:'avons perdu', vous:'avez perdu', ils:'ont perdu' },
    imparfait: { je:'perdais', tu:'perdais', il:'perdait', nous:'perdions', vous:'perdiez', ils:'perdaient' },
    'futur-proche': { je:'vais perdre', tu:'vas perdre', il:'va perdre', nous:'allons perdre', vous:'allez perdre', ils:'vont perdre' },
    'futur-simple': { je:'perdrai', tu:'perdras', il:'perdra', nous:'perdrons', vous:'perdrez', ils:'perdront' },
    'conditionnel-present': { je:'perdrais', tu:'perdrais', il:'perdrait', nous:'perdrions', vous:'perdriez', ils:'perdraient' }
    },
    'rendre': {
    infinitive: 'rendre',
    present: { je:'rends', tu:'rends', il:'rend', nous:'rendons', vous:'rendez', ils:'rendent' },
    'passe-compose': { je:'ai rendu', tu:'as rendu', il:'a rendu', nous:'avons rendu', vous:'avez rendu', ils:'ont rendu' },
    imparfait: { je:'rendais', tu:'rendais', il:'rendait', nous:'rendions', vous:'rendiez', ils:'rendaient' },
    'futur-proche': { je:'vais rendre', tu:'vas rendre', il:'va rendre', nous:'allons rendre', vous:'allez rendre', ils:'vont rendre' },
    'futur-simple': { je:'rendrai', tu:'rendras', il:'rendra', nous:'rendrons', vous:'rendrez', ils:'rendront' },
    'conditionnel-present': { je:'rendrais', tu:'rendrais', il:'rendrait', nous:'rendrions', vous:'rendriez', ils:'rendraient' }
    },
    'répondre': {
    infinitive: 'répondre',
    present: { je:'réponds', tu:'réponds', il:'répond', nous:'répondons', vous:'répondez', ils:'répondent' },
    'passe-compose': { je:'ai répondu', tu:'as répondu', il:'a répondu', nous:'avons répondu', vous:'avez répondu', ils:'ont répondu' },
    imparfait: { je:'répondais', tu:'répondais', il:'répondait', nous:'répondions', vous:'répondiez', ils:'répondaient' },
    'futur-proche': { je:'vais répondre', tu:'vas répondre', il:'va répondre', nous:'allons répondre', vous:'allez répondre', ils:'vont répondre' },
    'futur-simple': { je:'répondrai', tu:'répondras', il:'répondra', nous:'répondrons', vous:'répondrez', ils:'répondront' },
    'conditionnel-present': { je:'répondrais', tu:'répondrais', il:'répondrait', nous:'répondrions', vous:'répondriez', ils:'répondraient' }
    },
    'vendre': {
    infinitive: 'vendre',
    present: { je:'vends', tu:'vends', il:'vend', nous:'vendons', vous:'vendez', ils:'vendent' },
    'passe-compose': { je:'ai vendu', tu:'as vendu', il:'a vendu', nous:'avons vendu', vous:'avez vendu', ils:'ont vendu' },
    imparfait: { je:'vendais', tu:'vendais', il:'vendait', nous:'vendions', vous:'vendiez', ils:'vendaient' },
    'futur-proche': { je:'vais vendre', tu:'vas vendre', il:'va vendre', nous:'allons vendre', vous:'allez vendre', ils:'vont vendre' },
    'futur-simple': { je:'vendrai', tu:'vendras', il:'vendra', nous:'vendrons', vous:'vendrez', ils:'vendront' },
    'conditionnel-present': { je:'vendrais', tu:'vendrais', il:'vendrait', nous:'vendrions', vous:'vendriez', ils:'vendraient' }
    },
    'fondre': {
    infinitive: 'fondre',
    present: { je:'fonds', tu:'fonds', il:'fond', nous:'fondons', vous:'fondez', ils:'fondent' },
    'passe-compose': { je:'ai fondu', tu:'as fondu', il:'a fondu', nous:'avons fondu', vous:'avez fondu', ils:'ont fondu' },
    imparfait: { je:'fondais', tu:'fondais', il:'fondait', nous:'fondions', vous:'fondiez', ils:'fondaient' },
    'futur-proche': { je:'vais fondre', tu:'vas fondre', il:'va fondre', nous:'allons fondre', vous:'allez fondre', ils:'vont fondre' },
    'futur-simple': { je:'fondrai', tu:'fondras', il:'fondra', nous:'fondrons', vous:'fondrez', ils:'fondront' },
    'conditionnel-present': { je:'fondrais', tu:'fondrais', il:'fondrait', nous:'fondrions', vous:'fondriez', ils:'fondraient' }
    }
    };