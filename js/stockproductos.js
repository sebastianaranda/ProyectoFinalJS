const stockProductos = [
    {
        imagen: "./resources/productos/ProKit/fnatic/camisetas/fnatic_prokit_camiseta_2021.png",
        nombre: "Fnatic ProKit Camiseta 2021",
        precio: "$1500",
        destacado: true,
        categoria: "prokit",
        id: 1
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/campera/fnatic_prokit_campera.png",
        nombre: "Fnatic Prokit Campera 2021",
        precio: "$1500",
        destacado: false,
        categoria: "prokit",
        id: 2
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/pantalon/fnatic_prokit_pantalon.png",
        nombre: "Fnatic Prokit Pantalon 2021",
        precio: "$1500",
        destacado: false,
        categoria: "prokit",
        id: 3
    },
    {
        imagen: "./resources/productos/ProKit/fnatic/remera/fnatic_prokit_remera_entrenamiento.png",
        nombre: "Fnatic Prokit Remera Entrenamiento 2021",
        precio: "$1500",
        destacado: false,
        categoria: "prokit",
        id: 4
    },
    {
        imagen: "./resources/productos/ProKit/G2/camisetas/g2_prokit_camiseta.png",
        nombre: "G2 Prokit Camiseta 2021",
        precio: "$1500",
        destacado: true,
        categoria: "prokit",
        id: 5
    },
    {
        imagen: "./resources/productos/ProKit/G2/camperas/g2_prokit_campera.png",
        nombre: "G2 Prokit Campera 2021",
        precio: "$1500",
        destacado: true,
        categoria: "prokit",
        id: 6
    },
    {
        imagen: "./resources/productos/ProKit/G2/manga/g2_prokit_manga.png",
        nombre: "G2 Prokit Manga 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 7
    },
    {
        imagen: "./resources/productos/ProKit/G2/pantalon/g2_prokit_pantalon.png",
        nombre: "G2 Prokit Pantalon 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 8
    },
    {
        imagen: "./resources/productos/ProKit/heretics/camisetas/heretics_prokit_camiseta.png",
        nombre: "Heretics Prokit Camiseta 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 9
    },
    {
        imagen: "./resources/productos/ProKit/heretics/campera/heretics_prokit_campera.png",
        nombre: "Heretics Prokit Campera 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 10
    },
    {
        imagen: "./resources/productos/ProKit/heretics/pantalon/heretics_prokit_pantalon.png",
        nombre: "Heretics Prokit Pantalon 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 11
    },
    {
        imagen: "./resources/productos/ProKit/sentinels/camisetas/sentinels_prokit_camiseta.png",
        nombre: "Sentinels Prokit Camiseta 2021",
        precio: "$1",
        destacado: true,
        categoria: "prokit",
        id: 12
    },
    {
        imagen: "./resources/productos/ProKit/sentinels/camperas/sentinels_prokit_campera.png",
        nombre: "Sentinels Prokit Campera 2021",
        precio: "$1",
        destacado: true,
        categoria: "prokit",
        id: 13
    },
    {
        imagen: "./resources/productos/ProKit/version1/camisetas/version1_prokit_camiseta.png",
        nombre: "Version1 Prokit Camiseta 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 14
    },
    {
        imagen: "./resources/productos/ProKit/version1/camperas/version1_prokit_campera.png",
        nombre: "Version1 Prokit Campera 2021",
        precio: "$1",
        destacado: false,
        categoria: "prokit",
        id: 15
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Fnatic/fnatic_lifestyle_remera_collection1.png",
        nombre: "Fnatic Remera Collection",
        precio: "$1",
        destacado: true,
        categoria: "lifestyle",
        id: 16
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/G2/g2_lifestyle_remera_essential.png",
        nombre: "G2 Remera Essential",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 17
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Heretics/heretics_lifestyle_remera_essential.png",
        nombre: "Heretics Remera Essential",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 18
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Sentinels/sentinels_lifestyle_remera_teamBlack.png",
        nombre: "Sentinels Remera Team Black",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 19
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaCorta/Version1/version1_lifestyle_remera_v1.png",
        nombre: "Version1 Remera Classic",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 20
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/Fnatic/fnatic_lifestyle_remeraLarga_v1.png",
        nombre: "Fnatic Remera Larga",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 21
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/G2/g2_lifestyle_remeraLarga_essential.png",
        nombre: "G2 Remera Essential Larga",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 22
    },
    {
        imagen: "./resources/productos/Lifestyle/remeras/mangaLarga/Sentinels/sentinels_lifestyle_remeraLarga_LST.png",
        nombre: "Sentinels Remera LST",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 23
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/Fnatic/fnatic_lifestyle_pantalon_v1.png",
        nombre: "Fnatic Pantalon Classic",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 24
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/G2/g2_lifestyle_pantalon.png",
        nombre: "G2 Pantalon Classic",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 25
    },
    {
        imagen: "./resources/productos/Lifestyle/pantalones/Sentinels/sentinels_lifestyle_pantalon.png",
        nombre: "Sentinels Pantalon 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 26
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Fnatic/fnatic_lifestyle_buzo_v1.png",
        nombre: "Fnatic Buzo Invierno 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 27
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/G2/g2_lifestyle_buzo.png",
        nombre: "G2 Buzo 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 28
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Heretics/heretics_lifestyle_buzo.png",
        nombre: "Heretics Buzo",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 29
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Sentinels/sentinels_lifestyle_buzo.png",
        nombre: "Sentinels Buzo",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 30
    },
    {
        imagen: "./resources/productos/Lifestyle/buzos/Version1/version1_lifestyle_buzo.png",
        nombre: "Version1 Buzo",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 31
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/Fnatic/fnatic_lifestyle_campera_v1.png",
        nombre: "Fnatic Campera Training",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 32
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/G2/g2_lifestyle_campera.png",
        nombre: "G2 Campera Official",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 33
    },
    {
        imagen: "./resources/productos/Lifestyle/camperas/version1/version1_lifestyle_campera.png",
        nombre: "Version1 Campera 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 34
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/Fnatic/fnatic_lifestyle_sombrero_v1.png",
        nombre: "Fnatic Gorra 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 35
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/G2/g2_lifestyle_sombrero_v1.png",
        nombre: "G2 Gorra Official 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 36
    },
    {
        imagen: "./resources/productos/Lifestyle/sombreros/Version1/version1_lifestyle_sombrero_v1.png",
        nombre: "Version 1 Gorra 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 37
    },
    {
        imagen: "./resources/productos/Lifestyle/medias/G2/g2_lifestyle_medias.png",
        nombre: "G2 Medias Winter 2021",
        precio: "$1",
        destacado: false,
        categoria: "lifestyle",
        id: 38
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/Fnatic_bandera_2020.png",
        nombre: "Fnatic Bandera 2020",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 39
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/G2_bandera_2020.png",
        nombre: "G2 Bandera 2020",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 40
    },
    {
        imagen: "./resources/productos/Accesorios/Banderas/G2_bandera_2021.png",
        nombre: "G2 Bandera 2021",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 41
    },
    {
        imagen: "./resources/productos/Accesorios/Bolsos/g2_bolso_v1.png",
        nombre: "G2 Bolso Street",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 42
    },
    {
        imagen: "./resources/productos/Accesorios/Bolsos/heretics_bolso_v1.png",
        nombre: "Heretics Bolso School",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 43
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/fnatic_bufanda.png",
        nombre: "Fnatic Bufanda Winter 2020",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 44
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/g2_bufanda_v1.png",
        nombre: "G2 Bufanda 2021",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 45
    },
    {
        imagen: "./resources/productos/Accesorios/Bufandas/g2_bufanda_v2.png",
        nombre: "G2 Bufanda Street",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 46
    },
    {
        imagen: "./resources/productos/Accesorios/Cojines/heretics_cojines.png",
        nombre: "Heretics Cojines for Gammers",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 47
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/fnatic_llaveros_v1.png",
        nombre: "Fnatic Llavero Style A",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 48
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/fnatic_llaveros_v2.png",
        nombre: "Fnatic Llavero Style B",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 49
    },
    {
        imagen: "./resources/productos/Accesorios/Llaveros/g2_llavero_v1.png",
        nombre: "G2 Llavero Logo",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 50
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/fnatic_mascaras_v1.png",
        nombre: "Fnatic FaceMask",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 50
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v1.png",
        nombre: "G2 FaceMask",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 51
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v2.png",
        nombre: "G2 Mask White",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 52
    },
    {
        imagen: "./resources/productos/Accesorios/Mascaras/g2_mascaras_v3.png",
        nombre: "G2 Mask Samurai 2021",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 53
    },
    {
        imagen: "./resources/productos/Accesorios/Pulseras/g2_pulseras.png",
        nombre: "G2 Pulseras X3",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 54
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/fnatic_telefonos_v1.png",
        nombre: "Fnatic PopGrip",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 55
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/g2_telefono_caseIphone_v1.png",
        nombre: "G2 iPhone Case",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 56
    },
    {
        imagen: "./resources/productos/Accesorios/Telefonos/g2_telefono_caseSamsung.png",
        nombre: "G2 Samsung Case",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 57
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_lanyardv1.png",
        nombre: "Fnatic Lanyard Orange",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 58
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_lanyardv2.png",
        nombre: "Fnatic Lanyard Black",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 59
    },
    {
        imagen: "./resources/productos/Accesorios/Varios/fnatic_varios_pin.png",
        nombre: "Fnatic Crew Exclusive Pin",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 60
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/fnatic_vasos_v1.png",
        nombre: "Fnatic Bottle",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 61
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/g2_vasos_v1.png",
        nombre: "G2 Water Bottle",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 62
    },
    {
        imagen: "./resources/productos/Accesorios/Vasos/g2_vasos_v2.png",
        nombre: "G2 Standard Cup",
        precio: "$1",
        destacado: false,
        categoria: "accesorios",
        id: 63
    }
]