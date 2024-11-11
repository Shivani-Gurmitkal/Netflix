const movies = [
    {
        id: 1,
        title: "Vijay 69",
        slug:"vijay-69",
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTmNlz-1368ZFj60L9lrcM1a5NaDyMWDw6jAfYaC4hPemKNqxSgJpzChAqGaFtQvGSLopxthIeg0F7cdrVXgVn__wA5xL6pyiHA7i_YJhfSSdbuN8muvT1nJ_0ao7h42Xfx-nalhqSEZLgpIWSdatQlB9QjDn4Nr0xG6EEhlvvoDTtdhqShgjAcGoS0BsA_iXa-EIwplJPlhH2ny31C7kI4rLigRbsY46GqpB_QjNnoE7kfFHYko2d6rUdIH4rNiRSsIcWXggR3Kba9yPudibFw3WKEfocsrhVd6Q1k0k9_qw8O_QDBNAlKV.jpg?r=369",
        youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xvcNskZWkks?si=kZm4Z-TZbJvDSE8L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 2,
        title: "Do Patti",
        slug:"do-patti",
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABW92yOB1rqnnCwaP_wQCT_zV11j-xy3mcOigSNapu1aPNLDnotOeRnVH6YpnhwYLJD3qYdWWLyT7vP8NIsgUK9JJhCShChNl9GpqNuBTHdUPvd-vhSAY42hpJ9zo7Wlh0P0NpK1kjvCjKPlg6g8s7_kCv33N2So_oz1pcMg0IgvhAHof-p7VWKq7ta0ug4gZNXeprLItuUZvXRm-5BqlJqvbABntc1GVjPVluBwx3IsC4_1pnvdMaP4Sz5KePmIL5njM3uhW7hMH_goriB6xBFG6KlCryc9o2sPi9QkzXdExHc9GHc-egoJ2LaPi7bptINEIQxyPAz1bOH-6ELTtR9RtBLr6kEvSQysS4xHJl4T2ooi3KLU.jpg?r=6d5",
        youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/b6Z_RYC8IAQ?si=WedMvxiydVtRvHyS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 3,
        title: "Sector 36",
        slug:"sector-36",
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABew0ZNQKT8CCaiRRdG7jyMnbJphhGEAwCzaKB5fsslG1jE9_xnY8WkBKpL0OHHEy2xhWcpNxlqSFYf-OYBzGTECg78wzm6AEByAdWej0RLf1dvfjtqipkSzEp15frlQWxoWd.jpg?r=78e",
        youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eES65pr2POM?si=TlApBKaulQ_P7e9x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 4,
        title: "Mission Majnu",
        slug:"mission-majnu",
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfVPGd9gNssM8FvCp6oSY2S2o_9rTQKNYXOFg5XQI8A-aIkXw6miN5W1t-5yi7PaEon-UiSmhntz3yrXmKRs5_dIRqqSPmxXaPEYqeMjOevaXJLt8uqZ_NX8Gk4Xhe-SVmJg.jpg?r=4ed",
        youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gw77Nx4eBMc?si=MiQQ22Ruhv3cUXOk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        id: 5,
        title: "Jaane Jaan",
        slug:"jaane-jaan",
        img: "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfwmMsYobpo6Bu8yXpCkb6BhF9j41ElLumgXqnCdjdHcDsSF6QUaIUD5XSQMrceKJNpAsJXOU9HyKEFkrDgKzWCXodw6Otmnvy3i9l8gJi4DjEzJwnJU2-yQP4Q5RLWlJvob.jpg?r=e5c",
        youtube_trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GHX6yT9Lxfo?si=AVPVxqBlJ6bv-min" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
]

export default movies;