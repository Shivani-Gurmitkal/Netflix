const movies = [
    {
      id: 1,
      title: "Devara",
      slug: "devara",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfNx3MbbY8fliDIl8B2NKwwT72IE7yZ0K6S-YK84hNolKJBoH5L-NRBBgXpuopmp6dCkD4mMYv3biBZ-q3akfcf_YO08fXXIfefNQxVOypyD7RjbDLld-KzVbUrLOIVLRQ75kC6L_ClPlRX65LBXGQY4zx9tWUOHoH0EPP1IKfv_AnGEwaqt7sw2OWK0942pFRXSZPWX9MjHiAQXV9KhMVyS6U3gqZRK2N5GJ7EyBoKKFfrslE5PBfXG5lg68kaeXK9uQ4YD995KphFfZyeAkM_cClCVRw.webp?r=8fc",
      youtube_trailer: ""
    },
    {
      id: 2,
      title: "The Buckingham Murders",
      slug: "the-buckingham-murders",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTeUhlN7Wmw1b4t0eX4KX3bXFHxHhlpakB4OmzPAfOL3di_-fA1ZsgF-vVZP0riMzF_mFXWdC7ntR6fpqryYGsMOSYSxjmfB1tse_QIjIaD-5vHdGVYLwMqzMEhrmc-gkoYrVRxeau59RYiat0zmrrpMmtJ4m95JCWS4N5xJWWEmGRr5u60yEKYQ52MTh_vXJ_jWyrUjc525BeYnWbKwXQGifWWA2CTc1gZYjLyE1UdcfACgD5DOVc7iVatneZJvcArr-WlpRGAcI89Q1VN1AIR55sbuow.webp?r=7c1",
      youtube_trailer: ""
      
    },
    {
      id: 3,
      title: "Do Patti",
      slug: "do-patti",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSlWCyhclaFgZ2H59Hn0Y3MoRoRS0s7OAd4qYi1rkLYDPC_iLcZoyW2MpWrIFO_-kZJbPIBG_E1Qq7D6jahrjN1ulqB8m-cWXS94c53_IZsH4OeAee79gBLpYjmGrXr1OGDTyF6GZtos2tlU4tMJW14E7O-bOE0ldX-UF_9nPdRpnzg3sCwOK-AbsCwPGT8ebfsOmeDyjEhf4B-pRS_Pprlyf6K9YDAXNf7DRf3LL9nDKn-uC8uE2RyrN0y9FhefAOQkl0LUSMJwoELqX1aqYUA7rkSu5KoRhhNjpEKIplCS6-YKpDDqEbYDQ.jpg?r=b7e",
      youtube_trailer: "https://youtu.be/i4uHAM1BF6M?si=E3VKOlsbF4GTP7Ru"
      
    },
    {
      id: 4,
      title: "Meiyazhagan",
      slug: "meiyazhagan",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABfuGU4RANNXOYEBwq3MWfyYbBxNB9AE7yqSJlDs06Jz9Y-CJo6uj605d5Rp-_jQb93-CaxjVzqApwT2W7YKdAIuXzL1RTtQMiBqXLLg5FMaih3HyUpWU7dCJT9JiT-zqtK9wIS5P0MJaYGrks5k7Tk9PaKb8yyO_kv2oW379Bvm_U2xz6nUlx5HL2i1xsTl1esu1Xy2-P0u1tIQnPpw6KoJEcJF_lYQ9f-IoOwyBj2iVbCVyMzOxorf_XNUkCjTXMktDq2UxccagQu3fuJqsuOxAGBJZ7g.webp?r=bb0",
      youtube_trailer: "https://youtu.be/YGJOcMtnG1Q?si=krEjM2db4PG4pyAQ"
      
    },
    {
      id: 5,
      title: "Vijay 69",
      slug: "vijay-69",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABf_nRrlXu0n-ixNYQrIMnxuePNhDdaTupilawPPIFAdMbaj2AczUNI5uguLV2lBHE019v3MQayuBub1IOTuaN-35qHJgmAUONYCyc8k5ZBgyiIx9ecYXnpzUy8UP-M7Ncf47IPz8DINgUFNOxfXQFQ37bylWiZq7qro1_TehozAzU8mLj9mAIMvpSOWtxTst5UG4H04z2Q6Fb6THCCBplkS7mX3E3IDpInMAitC1rkXAcvJ70VIexQCoMh36HdC6PHGoAEimUV1W7sSO28uY_bIbISAzjUQ1FE6Q3Q_vSfEZQPVFxgv0TdyFmw.jpg?r=985",
      youtube_trailer: "" 
    },
    {
      id: 6,
      title: "Bhool Bhulaiyaa",
      slug: "bhool-bhulaiyaa",
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABW_8wpSkymvBm2WeGG1fw4LDh4QIpgxRXygJW0feXLURmYaBu7ud-aDLBW_cxPc4OO-hz0kZXB-oGyId_5Qv74up_s3cNWVcH4Uf.webp?r=882",
      youtube_trailer: "https://youtu.be/ss-7iGf1xE8?si=2W-o1ByDHSQH7UHC"
    },
    {
      id: 7,
      title: "Khel Khel Mein",
      slug: "khel-khel-mein",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTgICg7Js9IueW62LJmTf5i85m_SY73M4nx9kRA3j1imXZLisY-OxN22MjUC27Shv_o364cVoHqCljYhGgH61tqeEGN9zzS6CRax9YIkGiPkaCtNNBOyYFlEqVGf21FjbcTspQspsAirdpFI-KsRL89O7hOLPCn90seurQBnKeTkST5byNQv7SNN_lmpHytEiU0AiYNTda0FmI6GHvp-GXYse7LmKo0ckoNZeQyt6BPUlh-eqH_BhwDxr76c4IcZSv0cf8xKMSJkCeNPVWsLg4GGzxBtbA.webp?r=580",
      youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/RKZJtoFoaQg?si=pISRa7qfhUrHLpjO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      id: 8,
      title: "Bhool Bhulaiyaa 2",
      slug: "bhool-bhulaiyaa-2",
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSYr96dTGN0A8x2JRpN71pIyR9gNaNQjEiHgeyolYR3jQGg6rFhYDU6uMs96gAPGJC-6StNeiYhlR5RQJT4n1fJCkw1fE78Miom.webp?r=2e8",
      youtube_trailer: "https://youtu.be/P2KRKxAb2ek?si=4aeth19Ew21hsgf_"
    },
    {
      id: 9,
      title: "Time Cut",
      slug: "time-cut",
      img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQSaTIiLHsSj6KkudCCkpQqTxz7ef_bYfL__QHl91zd2neHh3VTW4oCC5yuBWrBJpH07c15TKxDuZTiX_oq31MBXslWM8Xws1YZ67hi6GN26fnJGhUX-2OUZOjPOddCEVTWJxqP-byVFDEjVk528ukqneQUTqTaiwV76FPl5x0OcAtnlgwQhWKQIL_SCeRJXwjJPDRM-Xfi0WeRnvpOWCCtYAygTcwQYbo0x4g_RDDyOAch9_FIZI-dxJWye8YO3G1MoVu_WMtVBAglA4qkRvnpCItRamqxaAQ8_h2WkVsd2FCGXnUL-K30P5Q.jpg?r=4eb",
      youtube_trailer: "https://youtu.be/a8F6yN56zB0?si=HhZMCb1chynrkn19"
    },
    {
      id: 10,
      title: "The Greatest of All Time",
      slug: "the-greatest-of-all-time",
      img: "https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeXwD-qEHgU9FL1kF61lyVf8Ir_-Af1WFNm0X3kJfzfA7fqRx04IdC4Ydxen-mkUw0LSunAMuAC8kR2nNEWiE0pAv3YvlsRajM22kTaA_7H4_f-PXVkSSB2pcuoEpofQvKXHZZmRPU9rQovLwYa7jVP5glo5ZwlhwEbJVRsc3DXLbcbLWb8k0Y5wIp4kl6IgAP6iMIHdSfT3TF8CP3HEZg6y7rkLfPYaeKDpuZTLWaQ1HHtoo-jYrGPpJwF4LoAuhU7bMeSp8vj1l97ZFfkCUopDwpx28g.webp?r=285",
      youtube_trailer: "https://youtu.be/ITQMsaLtG1U?si=2UUSE0ZtaPk0DPi-"
      },    
  ];

export default movies;

