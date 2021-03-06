const stockProductos = [
    {
        imagen: "./resources/productos/ProKit/fnatic/camisetas/fnatic_prokit_camiseta_2021.jpg",
        nombre: "Fnatic ProKit Camiseta 2021",
        precio: "$8031",
        destacado: true,
        categoria: "prokit",
        id: 1
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/campera/fnatic_prokit_campera.jpg",
        nombre: "Fnatic Prokit Campera 2021",
        precio: "$13768",
        destacado: false,
        categoria: "prokit",
        id: 2
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/pantalon/fnatic_prokit_pantalon.jpg",
        nombre: "Fnatic Prokit Pantalon 2021",
        precio: "$7457",
        destacado: false,
        categoria: "prokit",
        id: 3
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/remera/fnatic_prokit_remera_entrenamiento.jpg",
        nombre: "Fnatic Prokit Remera Entrenamiento 2021",
        precio: "$5163",
        destacado: false,
        categoria: "prokit",
        id: 4
    },
    {
        imagen: "./resources/productos/ProKit/G2/camisetas/g2_prokit_camiseta.jpg",
        nombre: "G2 Prokit Camiseta 2021",
        precio: "$9178",
        destacado: true,
        categoria: "prokit",
        id: 5
    },
    {
        imagen: "./resources/productos/ProKit/G2/camperas/g2_prokit_campera.jpg",
        nombre: "G2 Prokit Campera 2021",
        precio: "$10899",
        destacado: true,
        categoria: "prokit",
        id: 6
    },
    {
        imagen: "./resources/productos/ProKit/G2/manga/g2_prokit_manga.jpg",
        nombre: "G2 Prokit Manga 2021",
        precio: "$2868",
        destacado: false,
        categoria: "prokit",
        id: 7
    },
    {
        imagen: "./resources/productos/ProKit/G2/pantalon/g2_prokit_pantalon.jpg",
        nombre: "G2 Prokit Pantalon 2021",
        precio: "$7457",
        destacado: false,
        categoria: "prokit",
        id: 8
    },
    {
        imagen: "./resources/productos/ProKit/heretics/camisetas/heretics_prokit_camiseta.jpg",
        nombre: "Heretics Prokit Camiseta 2021",
        precio: "$2983",
        destacado: false,
        categoria: "prokit",
        id: 9
    },
    {
        imagen: "./resources/productos/ProKit/heretics/campera/heretics_prokit_campera.jpg",
        nombre: "Heretics Prokit Campera 2021",
        precio: "$6884",
        destacado: false,
        categoria: "prokit",
        id: 10
    },
    {
        imagen: "./resources/productos/ProKit/heretics/pantalon/heretics_prokit_pantalon.jpg",
        nombre: "Heretics Prokit Pantalon 2021",
        precio: "$4474",
        destacado: false,
        categoria: "prokit",
        id: 11
    },
    {
        imagen: "./resources/productos/ProKit/sentinels/camisetas/sentinels_prokit_camiseta.jpg",
        nombre: "Sentinels Prokit Camiseta 2021",
        precio: "$6759",
        destacado: true,
        categoria: "prokit",
        id: 12
    },
    {
        imagen: "./resources/productos/ProKit/sentinels/camperas/sentinels_prokit_campera.jpg",
        nombre: "Sentinels Prokit Campera 2021",
        precio: "$7242",
        destacado: true,
        categoria: "prokit",
        id: 13
    },
    {
        imagen: "./resources/productos/ProKit/version1/camisetas/version1_prokit_camiseta.jpg",
        nombre: "Version1 Prokit Camiseta 2021",
        precio: "$5793",
        destacado: false,
        categoria: "prokit",
        id: 14
    },
    {
        imagen: "./resources/productos/ProKit/version1/camperas/version1_prokit_campera.jpg",
        nombre: "Version1 Prokit Campera 2021",
        precio: "$8208",
        destacado: false,
        categoria: "prokit",
        id: 15
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Fnatic/fnatic_lifestyle_remera_collection1.jpg",
        nombre: "Fnatic Remera Collection",
        precio: "$2985",
        destacado: true,
        categoria: "lifestyle",
        id: 16
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/G2/g2_lifestyle_remera_essential.jpg",
        nombre: "G2 Remera Essential",
        precio: "$2294",
        destacado: false,
        categoria: "lifestyle",
        id: 17
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Heretics/heretics_lifestyle_remera_essential.jpg",
        nombre: "Heretics Remera Essential",
        precio: "$2800",
        destacado: false,
        categoria: "lifestyle",
        id: 18
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Sentinels/sentinels_lifestyle_remera_teamBlack.jpg",
        nombre: "Sentinels Remera Team Black",
        precio: "$2967",
        destacado: false,
        categoria: "lifestyle",
        id: 19
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Version1/version1_lifestyle_remera_v1.jpg",
        nombre: "Version1 Remera Classic",
        precio: "$3379",
        destacado: false,
        categoria: "lifestyle",
        id: 20
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/Fnatic/fnatic_lifestyle_remeraLarga_v1.jpg",
        nombre: "Fnatic Remera Larga",
        precio: "$4589",
        destacado: false,
        categoria: "lifestyle",
        id: 21
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/G2/g2_lifestyle_remeraLarga_essential.jpg",
        nombre: "G2 Remera Essential Larga",
        precio: "$4589",
        destacado: false,
        categoria: "lifestyle",
        id: 22
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/Sentinels/sentinels_lifestyle_remeraLarga_LST.jpg",
        nombre: "Sentinels Remera LST",
        precio: "$3896",
        destacado: false,
        categoria: "lifestyle",
        id: 23
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/Fnatic/fnatic_lifestyle_pantalon_v1.jpg",
        nombre: "Fnatic Pantalon Classic",
        precio: "$6884",
        destacado: false,
        categoria: "lifestyle",
        id: 24
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/G2/g2_lifestyle_pantalon.jpg",
        nombre: "G2 Pantalon Classic",
        precio: "$4015",
        destacado: false,
        categoria: "lifestyle",
        id: 25
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/Sentinels/sentinels_lifestyle_pantalon.jpg",
        nombre: "Sentinels Pantalon 2021",
        precio: "$2896",
        destacado: false,
        categoria: "lifestyle",
        id: 26
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Fnatic/fnatic_lifestyle_buzo_v1.jpg",
        nombre: "Fnatic Buzo Invierno 2021",
        precio: "$8949",
        destacado: false,
        categoria: "lifestyle",
        id: 27
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/G2/g2_lifestyle_buzo.jpg",
        nombre: "G2 Buzo 2021",
        precio: "$6884",
        destacado: false,
        categoria: "lifestyle",
        id: 28
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Heretics/heretics_lifestyle_buzo.jpg",
        nombre: "Heretics Buzo",
        precio: "$4474",
        destacado: false,
        categoria: "lifestyle",
        id: 29
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Sentinels/sentinels_lifestyle_buzo.jpg",
        nombre: "Sentinels Buzo",
        precio: "$6276",
        destacado: false,
        categoria: "lifestyle",
        id: 30
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Version1/version1_lifestyle_buzo.jpg",
        nombre: "Version1 Buzo",
        precio: "$6180",
        destacado: false,
        categoria: "lifestyle",
        id: 31
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/Fnatic/fnatic_lifestyle_campera_v1.jpg",
        nombre: "Fnatic Campera Training",
        precio: "$9752",
        destacado: false,
        categoria: "lifestyle",
        id: 32
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/G2/g2_lifestyle_campera.jpg",
        nombre: "G2 Campera Official",
        precio: "$6884",
        destacado: false,
        categoria: "lifestyle",
        id: 33
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/version1/version1_lifestyle_campera.jpg",
        nombre: "Version1 Campera 2021",
        precio: "$7628",
        destacado: false,
        categoria: "lifestyle",
        id: 34
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/Fnatic/fnatic_lifestyle_sombrero_v1.jpg",
        nombre: "Fnatic Gorra 2021",
        precio: "$3186",
        destacado: false,
        categoria: "lifestyle",
        id: 35
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/G2/g2_lifestyle_sombrero_v1.jpg",
        nombre: "G2 Gorra Official 2021",
        precio: "$2414",
        destacado: false,
        categoria: "lifestyle",
        id: 36
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/Version1/version1_lifestyle_sombrero_v1.jpg",
        nombre: "Version 1 Gorra 2021",
        precio: "$3090",
        destacado: false,
        categoria: "lifestyle",
        id: 37
    },
    {
        imagen: "./resources/productos/Lifestyle/medias/G2/g2_lifestyle_medias.jpg",
        nombre: "G2 Medias Winter 2021",
        precio: "$1721",
        destacado: false,
        categoria: "lifestyle",
        id: 38
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/Fnatic_bandera_2020.jpg",
        nombre: "Fnatic Bandera 2020",
        precio: "$2868",
        destacado: false,
        categoria: "accesorios",
        id: 39
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/G2_bandera_2020.jpg",
        nombre: "G2 Bandera 2020",
        precio: "$2890",
        destacado: false,
        categoria: "accesorios",
        id: 40
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/G2_bandera_2021.jpg",
        nombre: "G2 Bandera 2021",
        precio: "$3442",
        destacado: false,
        categoria: "accesorios",
        id: 41
    },
    {
        imagen: "./resources/productos/Accesorios/Bolsos/g2_bolso_v1.jpg",
        nombre: "G2 Bolso Street",
        precio: "$1147",
        destacado: false,
        categoria: "accesorios",
        id: 42
    },
    {
        imagen: "./resources/productos/Accesorios/Bolsos/heretics_bolso_v1.jpg",
        nombre: "Heretics Bolso School",
        precio: "$2983",
        destacado: false,
        categoria: "accesorios",
        id: 43
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/fnatic_bufanda.jpg",
        nombre: "Fnatic Bufanda Winter 2020",
        precio: "$3442",
        destacado: false,
        categoria: "accesorios",
        id: 44
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/g2_bufanda_v1.jpg",
        nombre: "G2 Bufanda 2021",
        precio: "$2294",
        destacado: false,
        categoria: "accesorios",
        id: 45
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/g2_bufanda_v2.jpg",
        nombre: "G2 Bufanda Street",
        precio: "$2868",
        destacado: false,
        categoria: "accesorios",
        id: 46
    },
    {
        imagen: "./resources/productos/Accesorios/Cojines/heretics_cojines.jpg",
        nombre: "Heretics Cojines for Gammers",
        precio: "$1954",
        destacado: false,
        categoria: "accesorios",
        id: 47
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/fnatic_llaveros_v1.jpg",
        nombre: "Fnatic Llavero Style A",
        precio: "$2179",
        destacado: false,
        categoria: "accesorios",
        id: 48
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/fnatic_llaveros_v2.jpg",
        nombre: "Fnatic Llavero Style B",
        precio: "$1147",
        destacado: false,
        categoria: "accesorios",
        id: 49
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/g2_llavero_v1.jpg",
        nombre: "G2 Llavero Logo",
        precio: "$803",
        destacado: false,
        categoria: "accesorios",
        id: 50
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/fnatic_mascaras_v1.jpg",
        nombre: "Fnatic FaceMask",
        precio: "$803",
        destacado: false,
        categoria: "accesorios",
        id: 50
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v1.jpg",
        nombre: "G2 FaceMask",
        precio: "$1721",
        destacado: false,
        categoria: "accesorios",
        id: 51
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v2.jpg",
        nombre: "G2 Mask White",
        precio: "$1721",
        destacado: false,
        categoria: "accesorios",
        id: 52
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v3.jpg",
        nombre: "G2 Mask Samurai 2021",
        precio: "$2065",
        destacado: false,
        categoria: "accesorios",
        id: 53
    },
    {
        imagen: "./resources/productos/Accesorios/Pulseras/g2_pulseras.jpg",
        nombre: "G2 Pulseras X3",
        precio: "$803",
        destacado: false,
        categoria: "accesorios",
        id: 54
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/fnatic_telefonos_v1.jpg",
        nombre: "Fnatic PopGrip",
        precio: "$1491",
        destacado: false,
        categoria: "accesorios",
        id: 55
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/g2_telefono_caseIphone_v1.jpg",
        nombre: "G2 iPhone Case",
        precio: "$2868",
        destacado: false,
        categoria: "accesorios",
        id: 56
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/g2_telefono_caseSamsung.jpg",
        nombre: "G2 Samsung Case",
        precio: "$2868",
        destacado: false,
        categoria: "accesorios",
        id: 57
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_lanyardv1.jpg",
        nombre: "Fnatic Lanyard Orange",
        precio: "$1491",
        destacado: false,
        categoria: "accesorios",
        id: 58
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_lanyardv2.jpg",
        nombre: "Fnatic Lanyard Black",
        precio: "$1491",
        destacado: false,
        categoria: "accesorios",
        id: 59
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_pin.jpg",
        nombre: "Fnatic Crew Exclusive Pin",
        precio: "$1032",
        destacado: false,
        categoria: "accesorios",
        id: 60
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/fnatic_vasos_v1.jpg",
        nombre: "Fnatic Bottle",
        precio: "$3212",
        destacado: false,
        categoria: "accesorios",
        id: 61
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/g2_vasos_v1.jpg",
        nombre: "G2 Water Bottle",
        precio: "$1376",
        destacado: false,
        categoria: "accesorios",
        id: 62
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/g2_vasos_v2.jpg",
        nombre: "G2 Standard Cup",
        precio: "$1147",
        destacado: false,
        categoria: "accesorios",
        id: 63
    }
]