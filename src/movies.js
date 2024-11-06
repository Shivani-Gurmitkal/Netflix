const data = [
    {
      id: 1,
      title: "Do Patti",
      slug: "do-patti",
      genre: "Drama",
      year: 2023,
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSlWCyhclaFgZ2H59Hn0Y3MoRoRS0s7OAd4qYi1rkLYDPC_iLcZoyW2MpWrIFO_-kZJbPIBG_E1Qq7D6jahrjN1ulqB8m-cWXS94c53_IZsH4OeAee79gBLpYjmGrXr1OGDTyF6GZtos2tlU4tMJW14E7O-bOE0ldX-UF_9nPdRpnzg3sCwOK-AbsCwPGT8ebfsOmeDyjEhf4B-pRS_Pprlyf6K9YDAXNf7DRf3LL9nDKn-uC8uE2RyrN0y9FhefAOQkl0LUSMJwoELqX1aqYUA7rkSu5KoRhhNjpEKIplCS6-YKpDDqEbYDQ.jpg?r=b7e",
      description: "Twin sisters harbouring deep secrets and a determined police inspector seeking to uncover the truth in an attempted murder case.",
      rating: "U/A 16+",
      actors: ["Kriti Sanon", "Kajol", "Brijendra Kala"],
      director: "Shashanka Ghosh",
      youtube_trailer: "https://youtu.be/i4uHAM1BF6M?si=E3VKOlsbF4GTP7Ru"
    },
    {
      id: 2,
      title: "Meiyazhagan",
      slug: "meiyazhagan",
      genre: "Action",
      year: 2023,
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfuGU4RANNXOYEBwq3MWfyYbBxNB9AE7yqSJlDs06Jz9Y-CJo6uj605d5Rp-_jQb93-CaxjVzqApwT2W7YKdAIuXzL1RTtQMiBqXLLg5FMaih3HyUpWU7dCJT9JiT-zqtK9wIS5P0MJaYGrks5k7Tk9PaKb8yyO_kv2oW379Bvm_U2xz6nUlx5HL2i1xsTl1esu1Xy2-P0u1tIQnPpw6KoJEcJF_lYQ9f-IoOwyBj2iVbCVyMzOxorf_XNUkCjTXMktDq2UxccagQu3fuJqsuOxAGBJZ7g.webp?r=bb0",
      description : "A man's life is changed when he bumps into someone from his hometown gentle scenes are occasionally punctuated by sporting threat and recollections of violence.",
      rating: "U/A 7+",
      actors: ["Karthi", "Arvind Swamy", "Sri Divya"],
      director: "Director Name",
      youtube_trailer: "https://youtu.be/YGJOcMtnG1Q?si=krEjM2db4PG4pyAQ"
    },
    {
      id: 3,
      title: "Time Cut",
      slug: "time-cut",
      genre: "Horror, Mystery, Sci-Fi",
      year: 2024,
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSaTIiLHsSj6KkudCCkpQqTxz7ef_bYfL__QHl91zd2neHh3VTW4oCC5yuBWrBJpH07c15TKxDuZTiX_oq31MBXslWM8Xws1YZ67hi6GN26fnJGhUX-2OUZOjPOddCEVTWJxqP-byVFDEjVk528ukqneQUTqTaiwV76FPl5x0OcAtnlgwQhWKQIL_SCeRJXwjJPDRM-Xfi0WeRnvpOWCCtYAygTcwQYbo0x4g_RDDyOAch9_FIZI-dxJWye8YO3G1MoVu_WMtVBAglA4qkRvnpCItRamqxaAQ8_h2WkVsd2FCGXnUL-K30P5Q.jpg?r=4eb",
      description : "High school student accidentally travels back to 2003 and decides to stop the serial killer who murdered her sister.",
      rating: "U/A 16+",
      actors: ["Madison Bailey", "Antonia Gentry", "Michael Shanks"],
      director: "Hannah Macpherson",
      youtube_trailer: "https://youtu.be/a8F6yN56zB0?si=HhZMCb1chynrkn19"
    },
    {
      id: 4,
      title: "Khel Khel Mein",
      slug: "khel-khel-mein",
      genre: "Comedy, Drama",
      year: 2024,
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTgICg7Js9IueW62LJmTf5i85m_SY73M4nx9kRA3j1imXZLisY-OxN22MjUC27Shv_o364cVoHqCljYhGgH61tqeEGN9zzS6CRax9YIkGiPkaCtNNBOyYFlEqVGf21FjbcTspQspsAirdpFI-KsRL89O7hOLPCn90seurQBnKeTkST5byNQv7SNN_lmpHytEiU0AiYNTda0FmI6GHvp-GXYse7LmKo0ckoNZeQyt6BPUlh-eqH_BhwDxr76c4IcZSv0cf8xKMSJkCeNPVWsLg4GGzxBtbA.webp?r=580",
      description: "Revolves around a group of friends who gather for a dinner and end up revealing secrets about each other.",
      rating: "U/A 16+",
      actors: ["Akshay Kumar", "Ammy Virk", "Taapsee Pannu"],
      director: "Mudassar Aziz",
      youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RKZJtoFoaQg?si=pISRa7qfhUrHLpjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      id: 5,
      title: "Bhool Bhulaiyaa",
      slug: "bhool-bhulaiyaa",
      genre: "Comedy, Horror, Mystery",
      year: 2007,
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABW_8wpSkymvBm2WeGG1fw4LDh4QIpgxRXygJW0feXLURmYaBu7ud-aDLBW_cxPc4OO-hz0kZXB-oGyId_5Qv74up_s3cNWVcH4Uf.webp?r=882",
      description: "An NRI and his wife decide to stay in his ancestral home, paying no heed to the warnings about ghosts. Soon, inexplicable occurrences cause him to call a psychiatrist to help solve the mystery.",
      rating: "U/A 16+",
      actors: ["Akshay Kumar", "Vidya Balan", "Shiney Ahuja"],
      director: "Priyadarshan",
      youtube_trailer: "https://youtu.be/ss-7iGf1xE8?si=2W-o1ByDHSQH7UHC"
    },
    {
      id: 6,
      title: "Transformers: Rise of Beasts",
      slug: "transformers-rise-of-beasts",
      genre: "Action, Sci-Fi",
      year: 2023,
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABea-XCmUq-kto8sYPx7w4S3x8XlDk42hKLGmS8d2E0aQBBO6VuQYa2Yob7BTC6-ae5rwbwviYZstFfCNBA5zYqLCx6aENzH2ZaKDhKNxVIrgGhat47LXlvKIsZz1bp_BGJoCeClbA-5tW0mJ3vudKRxqe4WItj7XD7eiZ9B2ax2PdpdZua_JWyphj906X2z8R_o7xfN7idU8iWP0ChQSl3YLrbvUOFjnUCW7H7yKv8KFQbEy0REPl_fxOxd0rOTiQmjlE8KixLitc2_hcyhWJueqjySaQw.webp?r=cee",
      description: "Revolves around a group of friends who gather for a dinner and end up revealing secrets about each other.",
      rating: "U/A 13+",
      actors: ["Anthony Ramos", "Dominique Fishback"],
      director: "Steven Caple Jr.",
      youtube_trailer: "https://youtu.be/itnqEauWQZM?si=-61Jabz2Zjif6ieK"
    },
    {
      id: 7,
      title: "The Greatest of All Time",
      slug: "the-greatest-of-all-time",
      genre: "Action, Thriller",
      year: 2024,
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeXwD-qEHgU9FL1kF61lyVf8Ir_-Af1WFNm0X3kJfzfA7fqRx04IdC4Ydxen-mkUw0LSunAMuAC8kR2nNEWiE0pAv3YvlsRajM22kTaA_7H4_f-PXVkSSB2pcuoEpofQvKXHZZmRPU9rQovLwYa7jVP5glo5ZwlhwEbJVRsc3DXLbcbLWb8k0Y5wIp4kl6IgAP6iMIHdSfT3TF8CP3HEZg6y7rkLfPYaeKDpuZTLWaQ1HHtoo-jYrGPpJwF4LoAuhU7bMeSp8vj1l97ZFfkCUopDwpx28g.webp?r=285",
      description: "Gandhi is a hostage negotiator, field agent, and spy working for the Special Anti-Terrorist Squad (SATS). After years of service, he is called back for a critical mission that sets him on a dangerous collision course with his own past.",
      rating: "U/A 16+",
      actors: ["Joseph Vijay", "Prashanth", "Prabhu Deva"],
      director: "Venkat Prabhu",
      youtube_trailer: "https://youtu.be/ITQMsaLtG1U?si=2UUSE0ZtaPk0DPi-"
    },
    {
      id: 8,
      title: "Bhool Bhulaiyaa 2",
      slug: "bhool-bhulaiyaa-2",
      genre: "Comedy, Horror",
      year: 2022,
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSYr96dTGN0A8x2JRpN71pIyR9gNaNQjEiHgeyolYR3jQGg6rFhYDU6uMs96gAPGJC-6StNeiYhlR5RQJT4n1fJCkw1fE78Miom.webp?r=2e8",
      description: "When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit that has been trapped for 18 years.",
      rating: "U/A 13+",
      actors: ["Tabu", "Kartik Aaryan", "Kiara Advani"],
      director: "Anees Bazmee",
      youtube_trailer: "https://youtu.be/P2KRKxAb2ek?si=4aeth19Ew21hsgf_"
    },
    {
      id: 9,
      title: "Don't Move",
      slug: "dont-move",
      genre: "Horror, Thriller",
      year: 2024,
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWbr7WqVjKDb2JNjTpWVIBaTubfnPu4DKK4F2W09pDMrjD-O4BR4WhHT261SXvvQ0egTOtpT2WyoYXLR5kaFW3t-HYh5AFEOMBEY8UnT2p0icrhIGCceY_wc218sCa4U_-C9LJ0Us49OyoftCO0rs98zNBjrNIn1vJStWoe8KbIU_jMUsppbRUrzkZsULhK5x--PrEbSkC_ahypeozOvfCTdRpOizm0pCSRrc6bx6ZoKKq3cCZPhCiHb44M_h7TXP6rLm7pxpH5eOqe_6D_mEuWmNVWtv-Wlei_g4fQC36KHBmbOtnGTv_uG2A.jpg?r=7e5",
      description : "A seasoned killer injects a grieving woman with a paralytic agent. She must run, fight and hide before her body shuts down.",
      rating: "U/A 16+",
      actors: [ "Kelsey AsbilleFinn", "WittrockMoray", "Treadwell"],
      director: "Adam Schindler, Brian Netto",
      youtube_trailer: "https://youtu.be/YjTZMEbpKsc?si=zI5RA2D6J0UtssSb"
    },
    {
        id: 10,
        title: "Family Pack",
        slug: "family-pack",
        genre: "Adventure, Comdey Fantasy",
        year: 2024,
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX-da94hR2DddQoKRqNB6Yqi0h3AxzNXGQbDh6vuvaW7HOu4yfkiARnIXjjdCbo8oo-Ug9PBCitSu3qqAEwPmNstW0jcG48jDFA6mhM91tfAeuNrnOv_ewvX2s0L-VZQfNNBeN0Nx83RM75mm6GHNhCyUHvK8Qq7QN0GCVeOVIXyJcOCB3Gx20Sgs5Jsa2YQ7Hbrt5vumAzZe6uEX4YzfEkSe4w9Y52zYFPIrk-Z4qXDt6Yuz38CEXGH-dzWY-IXOSDpWj7peCAERybs4xI53kIl_0Ucb45UAmzpWtnnBlMWWjYcgCh1xDEmKg.jpg?r=679",
        description: "When night falls, and the players have their eyes closed, werewolves make victims among the villagers.",
        rating: "U/A 13+",
        actors: [ "Franck DuboscJean", "RenoSuzanne", "Clément"],
        director: "François Uzan",
        youtube_trailer: "https://youtu.be/bqd702kNnRk?si=d7iqiGSq8nXLalUJ"
      },    
  ];

export default data;

