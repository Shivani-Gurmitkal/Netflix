const movies = [
    {
        id: 1,
        title: "Pushpa 2",
        slug: "pushpa 2",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcBQAzZgCcAJyLKGf0x3EjJHKr1h1oCRUQDfVspaHXampP-RjiOkIRlWBz7ViFOvUI1EdPSRcxoOPmB7paPLi52W4OmQZJ4NDMQ.webp?r=a92",
    },
    {
        id: 2,
        title: "Daaku Maharaaj",
        slug: "daaku maharaaj",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABX__4IDXUfAha-ZJby9rICyllwCXAkILhlvlrj_TXuGnRRIxxXZBffOBGK4S4kl_HN6oSWDXguVxJrnKIVY7LVDxnEP-Mo9RDWU.webp?r=207"
    },
    {
        id: 3,
        title: "Squid Game",
        slug: "squid game",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp?r=06c"
    },
    {
        id: 4,
        title: "Dabba Cartel",
        slug: "dabba cartel",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABexxJ7CuzN9sn4oXmDXsOPWU4dalTxyPYB7mIcyBrXl-dNeHcSB1yT4BinjKzhXgVpBdRVm4GSA3X7NyZEIkGbm40jcHE4hYKJyPYK7YN660ARcEsF57PrIPsalxMtfHnlur.webp?r=319"
    },
    {
        id: 5,
        title: "Dhoom Dhaam",
        slug: "dhoom dhaam",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUiKNXIYjkmCmVedWUxralkvxaJAvqtsiIxM-jkmtG4Bgpu2XYlDGkqwmqUjujkKNLwjuiImN5xHgYQvYE5sgAtW2voNprG98TkAh737RgL5kQZrGbIhuwp_Tn_aJi7PzSFE.webp?r=f85"
    },
    {
        id: 6,
        title: "Lucky Baskhar",
        slug: "lucky baskha",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcJkAYihjBQ5SjWbwydLdZE8Dm1cJ0whRc21AEIS4V0VO8w65lEDAW5gwzTFTUuNqVTgBcgucwr6rMeRHra3xlru9n1CCtfOm1s.webp?r=e1d"
    },
    {
        id: 7,
        title: "Bhool Bhulaiyaa 3",
        slug: "bhool bhulaiyaa 3",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABScSAnI47ovoETcYBhKCILXN91D3uCQTeh3aG24EF1iRpP7YNh86hK0eF8JkfKAzdNYZcjcvLy4UB_BpSQgg2AcvjjRMpP6A8C0.webp?r=4bd"
    },
    {
        id: 8,
        title: "Kadhalikka Neramillai",
        slug: "kadhalikka neramillai",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZnjM_Ljo0Ugt0oFeUE_Nn6aPb-LFvb3uH_GhNmL50iO6RZ8wngRwrKbr40LK-Dp9Hzxy_JWQKjpfXwOXC7SScR0i_3B9yM2kQU.webp?r=d74"
    },
    {
        id: 9,
        title: "Venom",
        slug: "venom",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRB3rewJT09RhxS4rHE_KfiiI3yrHEI3H2KcP4K5AxMBqUOZVM4QeaV9NjNs8CJ4AEjhH_BXKGaSWdOqQgWLNpHFKadmEfFjdf4.webp?r=de2"
    },
    {
        id: 10,
        title: "Mismatched",
        slug: "mismatched",
        img: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZJH5UgOhy6NyDoAfEigLLNPRc_cw2W7Gz87mbTfvRDHbr1fLHhrPpcKQdXnREMcUcZbnX8_ZK8mYS1CgW8B4NXHcTA-grl4BSpgtPn-jMwZpsh7Kk2XcJArjUbsdp0u5JLX.webp?r=e02"
    }
]

export default movies;