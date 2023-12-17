function distance(a, b) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

class DBDMap {
    constructor(draw) {

    this._nodes = this.nodes;

    const pattern = draw.pattern(10, 10, function(add) {
        add.rect(10, 5).fill('rgba(0,0,255,0.5)');
        add.rect(10, 5).move(0, 5).fill('rgba(255,0,0,0.5)');
    }).rotate(-45);

    this._affilToFill = {
        //transparent
        'unafilliated': 'rgba(255,255,255,1)',
        //red
        'solfed': 'rgba(255,0,0,0.5)',
        //blue
        'bree': 'rgba(0,0,255,0.5)',
        //blue-red crosshatch
        'bree-solfed': pattern,
    };
    

    console.log(this._edges);

    this._embellishments = [
    { type: 'regionLabel', x: -150, y: -150, text: 'Solar Federation', fontSize: 50, color: 'white' },
    { type: 'regionLabel', x: -200, y: -600, text: 'Bree Triarchy', fontSize: 50, color: 'white' },
    { type: 'regionLabel', x: 500, y: -300, text: 'Krik Meta-Hive', fontSize: 50, color: 'white' },
    { type: 'regionLabel', x: 600, y: 500, text: 'Mintaka Republic', fontSize: 50, color: 'white' },
    { type: 'regionLabel', x: 1000, y: 0, text: 'Isolan Empire', fontSize: 50, color: 'white' },
    ];
    }
    
    get nodes() {
        var nodes = this._nodes;
        nodes = nodes.map((node) => {
            if (!('affiliation' in node)) {
              node['affiliation'] = 'unafilliated';
            }
            return node;
          });

        return nodes;
    }

    get edges() {
        return this._edges = [
            {
                "source": "Elysium",
                "target": "Capella",
                "type": "hyperlane"
            },
            {
                "source": "Capella",
                "target": "Tianjing",
                "type": "hyperlane"
            },
            {
                "source": "Capella",
                "target": "Nuevo Mexico",
                "type": "hyperlane"
            },
            {
                "source": "Tianjing",
                "target": "Nuevo Mexico",
                "type": "hyperlane"
            },
            {
                "source": "id_1g.ca6e61spl_28.x30fiwflm",
                "target": "Newer England",
                "type": "jumplane"
            },
            {
                "source": "id_37.es4k5n994_2.mq4o6zbrv6",
                "target": "id_2s.j273qo6ts_4.15mw4a76cp",
                "type": "jumplane"
            },
            {
                "source": "id_49.990gsx7my_h.v2dg82pgo",
                "target": "id_37.es4k5n994_2.mq4o6zbrv6",
                "type": "jumplane"
            },
            {
                "source": "id_4l.s2xxwvx2_r.s44qpccn17",
                "target": "id_49.990gsx7my_h.v2dg82pgo",
                "type": "jumplane"
            },
            {
                "source": "id_59.pbaxcu8bg_1k.gkifpzdh6",
                "target": "id_4l.s2xxwvx2_r.s44qpccn17",
                "type": "jumplane"
            },
            {
                "source": "id_67.xkn5r4407_27.ciynda4ji",
                "target": "id_59.pbaxcu8bg_1k.gkifpzdh6",
                "type": "jumplane"
            },
            {
                "source": "id_67.xkn5r4407_27.ciynda4ji",
                "target": "id_5u.ej7zp7iz7_2u.j8hs4ulvu",
                "type": "jumplane"
            },
            {
                "source": "id_5n.6r63owvz_48.hl5wrkf8y",
                "target": "id_5u.ej7zp7iz7_2u.j8hs4ulvu",
                "type": "jumplane"
            },
            {
                "source": "id_37.es4k5n994_2.mq4o6zbrv6",
                "target": "id_35.fym4z9mvl_1p.kxlswadum",
                "type": "jumplane"
            },
            {
                "source": "id_1s.c76iakzg_2l.muhw464s1",
                "target": "id_35.fym4z9mvl_1p.kxlswadum",
                "type": "jumplane"
            },
            {
                "source": "id_x.7a7rkltcd_21.td9a57eab",
                "target": "id_1s.c76iakzg_2l.muhw464s1",
                "type": "jumplane"
            },
            {
                "source": "id_x.7a7rkltcd_21.td9a57eab",
                "target": "id_4g.a12hmariw_x.sh3j2277q",
                "type": "jumplane"
            },
            {
                "source": "id_4g.a12hmariw_x.sh3j2277q",
                "target": "id_4l.hmdyjdsbc_1m.jseta5j69",
                "type": "jumplane"
            },
            {
                "source": "id_4g.a12hmariw_x.sh3j2277q",
                "target": "id_4l.p7ry455io_6.txggnca0zx",
                "type": "jumplane"
            },
            {
                "source": "id_4k.em7eq8nrd_15.lkp6n0zzvi",
                "target": "id_4l.p7ry455io_6.txggnca0zx",
                "type": "jumplane"
            },
            {
                "source": "Newer England",
                "target": "id_3o.bqlfu9vy3_1x.xi46hra9q",
                "type": "jumplane"
            },
            {
                "source": "Newer England",
                "target": "id_3t.ipjxsn9ca_3t.gd3nr0ize",
                "type": "jumplane"
            },
            {
                "source": "id_6r.9m5b6y9v_21.jw9s2199i",
                "target": "id_4k.em7eq8nrd_15.lkp6n0zzvi",
                "type": "jumplane"
            },
            {
                "source": "id_6w.6rj3p43g4_v.k28xfebmkh",
                "target": "id_6r.9m5b6y9v_21.jw9s2199i",
                "type": "jumplane"
            },
            {
                "source": "id_6w.6rj3p43g4_v.k28xfebmkh",
                "target": "id_5s.n6n9v9gbv_3.k3b356fkjo",
                "type": "jumplane"
            },
            {
                "source": "id_77.xoaagk3gc_5.99smzliqiu",
                "target": "id_6w.6rj3p43g4_v.k28xfebmkh",
                "type": "jumplane"
            },
            {
                "source": "id_6r.9m5b6y9v_21.jw9s2199i",
                "target": "id_7o.iy3vfxhn_4j.oheif6mm3",
                "type": "jumplane"
            },
            {
                "source": "id_7o.iy3vfxhn_4j.oheif6mm3",
                "target": "San Cristobal",
                "type": "jumplane"
            },
            {
                "source": "id_9o.h7xweii8r_5s.o6e3v267u",
                "target": "id_af.q1d399pzs_6s.wrt14drug",
                "type": "jumplane"
            },
            {
                "source": "id_az.bzjofa32f_6c.uyt40tdeo",
                "target": "id_af.q1d399pzs_6s.wrt14drug",
                "type": "jumplane"
            },
            {
                "source": "id_at.gw90r0uq5_4e.z08xoc8ai",
                "target": "id_az.bzjofa32f_6c.uyt40tdeo",
                "type": "jumplane"
            },
            {
                "source": "id_ab.69bmpoy56_4k.0tkybpwe5",
                "target": "id_at.gw90r0uq5_4e.z08xoc8ai",
                "type": "jumplane"
            },
            {
                "source": "id_21.8hvtkzufh_3i.xlm5ruo1a",
                "target": "id_10.m9szdj83o_27.smv7e20jh",
                "type": "jumplane"
            },
            {
                "source": "id_b.xk0sm5i8wj_4k.aujymh2h7",
                "target": "id_21.8hvtkzufh_3i.xlm5ruo1a",
                "type": "jumplane"
            },
            {
                "source": "id_w.16a3kqtb1_69.6nb9il2p6",
                "target": "id_b.xk0sm5i8wj_4k.aujymh2h7",
                "type": "jumplane"
            },
            {
                "source": "id_2d.yopjr2n8e_5u.q7bmrz9j7",
                "target": "id_w.16a3kqtb1_69.6nb9il2p6",
                "type": "jumplane"
            },
            {
                "source": "id_w.16a3kqtb1_69.6nb9il2p6",
                "target": "id_19.lzn9yjswek_6n.kffyjrhto",
                "type": "jumplane"
            },
            {
                "source": "id_19.lzn9yjswek_6n.kffyjrhto",
                "target": "id_s.3h3z7tmg6o_89.ip0im27",
                "type": "jumplane"
            },
            {
                "source": "id_w.16a3kqtb1_69.6nb9il2p6",
                "target": "id_1i.b0htrmrv5f_6d.9b9yi1tmb",
                "type": "jumplane"
            },
            {
                "source": "id_10.ugagjveqw_9b.yhf56ruw4",
                "target": "id_s.3h3z7tmg6o_89.ip0im27",
                "type": "jumplane"
            },
            {
                "source": "id_10.ugagjveqw_9b.yhf56ruw4",
                "target": "id_2m.vf0dj42ya_9r.0zcvn20qw",
                "type": "jumplane"
            },
            {
                "source": "id_3m.0gwnj7q3_9a.nxj6clz85",
                "target": "id_2m.vf0dj42ya_9r.0zcvn20qw",
                "type": "jumplane"
            },
            {
                "source": "id_3m.0gwnj7q3_9a.nxj6clz85",
                "target": "id_5t.96lp2rjfp_9g.1o8podtkq",
                "type": "jumplane"
            },
            {
                "source": "id_80.1lh8w5329_82.g1vislqmr",
                "target": "id_7b.fzif8vtqd_9r.8u09i0ann",
                "type": "jumplane"
            },
            {
                "source": "id_76.zjhn10am_aj.n9crhi2iq",
                "target": "id_7b.fzif8vtqd_9r.8u09i0ann",
                "type": "jumplane"
            },
            {
                "source": "id_76.zjhn10am_aj.n9crhi2iq",
                "target": "id_5t.96lp2rjfp_9g.1o8podtkq",
                "type": "jumplane"
            },
            {
                "source": "id_5t.96lp2rjfp_9g.1o8podtkq",
                "target": "id_7b.fzif8vtqd_9r.8u09i0ann",
                "type": "jumplane"
            },
            {
                "source": "id_7t.btm8cian4_9y.7rxr6ivn",
                "target": "id_7b.fzif8vtqd_9r.8u09i0ann",
                "type": "jumplane"
            },
            {
                "source": "id_5l.0fgvqdro_5y.bo7twk30j",
                "target": "id_3t.ipjxsn9ca_3t.gd3nr0ize",
                "type": "jumplane"
            },
            {
                "source": "id_3t.ipjxsn9ca_3t.gd3nr0ize",
                "target": "id_1i.b0htrmrv5f_6d.9b9yi1tmb",
                "type": "jumplane"
            },
            {
                "source": "id_1i.b0htrmrv5f_6d.9b9yi1tmb",
                "target": "id_5l.0fgvqdro_5y.bo7twk30j",
                "type": "jumplane"
            },
            {
                "source": "id_1y.4sb8in3bl_ai.xsz8ng3d",
                "target": "id_2m.vf0dj42ya_9r.0zcvn20qw",
                "type": "jumplane"
            },
            {
                "source": "id_67.xkn5r4407_27.ciynda4ji",
                "target": "id_7d.d43hsg30s_45.wea2hp1q",
                "type": "jumplane"
            },
            {
                "source": "id_14.g2tqr5uo3_cr.mjbazi4cf",
                "target": "id_1y.4sb8in3bl_ai.xsz8ng3d",
                "type": "jumplane"
            },
            {
                "source": "id_h.z2cbzrlc3r_cl.rhksv56uv",
                "target": "id_14.g2tqr5uo3_cr.mjbazi4cf",
                "type": "jumplane"
            },
            {
                "source": "id_1t.kjnkwe4x_bg.rmo8iquh",
                "target": "id_h.z2cbzrlc3r_cl.rhksv56uv",
                "type": "jumplane"
            },
            {
                "source": "id_1t.kjnkwe4x_bg.rmo8iquh",
                "target": "Nuevo Mexico",
                "type": "jumplane"
            },
            {
                "source": "Nuevo Mexico",
                "target": "id_46.7reo3njxh_c0.3yh0ivkdt",
                "type": "jumplane"
            },
            {
                "source": "id_41.20ub0jc98_9b.j4bca9w",
                "target": "id_46.7reo3njxh_c0.3yh0ivkdt",
                "type": "jumplane"
            },
            {
                "source": "id_68.f7xnfxvci_73.05pgi93uq",
                "target": "id_41.20ub0jc98_9b.j4bca9w",
                "type": "jumplane"
            },
            {
                "source": "id_68.f7xnfxvci_73.05pgi93uq",
                "target": "Minor 8",
                "type": "jumplane"
            },
            {
                "source": "Minor 8",
                "target": "id_2d.yopjr2n8e_5u.q7bmrz9j7",
                "type": "jumplane"
            },
            {
                "source": "id_50.ba6pxeudt_4o.4kgga193m",
                "target": "Minor 8",
                "type": "jumplane"
            },
            {
                "source": "id_4i.6bi9x600o_28.bd6pdnqj7",
                "target": "id_21.8hvtkzufh_3i.xlm5ruo1a",
                "type": "jumplane"
            },
            {
                "source": "id_49.990gsx7my_h.v2dg82pgo",
                "target": "id_4i.6bi9x600o_28.bd6pdnqj7",
                "type": "jumplane"
            },
            {
                "source": "id_3t.ipjxsn9ca_3t.gd3nr0ize",
                "target": "Minor 4",
                "type": "jumplane"
            },
            {
                "source": "id_80.1lh8w5329_82.g1vislqmr",
                "target": "Minor 2",
                "type": "jumplane"
            },
            {
                "source": "Tianjing",
                "target": "id_80.1lh8w5329_82.g1vislqmr",
                "type": "jumplane"
            },
            {
                "source": "id_5l.0fgvqdro_5y.bo7twk30j",
                "target": "Minor 2",
                "type": "jumplane"
            },
            {
                "source": "Tianjing",
                "target": "San Cristobal",
                "type": "jumplane"
            },
            {
                "source": "id_7o.iy3vfxhn_4j.oheif6mm3",
                "target": "id_5l.0fgvqdro_5y.bo7twk30j",
                "type": "jumplane"
            },
            {
                "source": "id_9o.h7xweii8r_5s.o6e3v267u",
                "target": "Tianjing",
                "type": "jumplane"
            },
            {
                "source": "Sol",
                "target": "Capella",
                "type": "jumplane"
            },
            {
                "source": "id_u.1np6yef65a_5b.swo0nipvg",
                "target": "Sol",
                "type": "jumplane"
            },
            {
                "source": "id_x.7a7rkltcd_21.td9a57eab",
                "target": "Sol",
                "type": "jumplane"
            },
            {
                "source": "Minor 3",
                "target": "id_4l.hmdyjdsbc_1m.jseta5j69",
                "type": "jumplane"
            },
            {
                "source": "id_6s.sflrt8lrm_31.cdevwjqu6",
                "target": "Minor 3",
                "type": "jumplane"
            },
            {
                "source": "id_7f.th6wqg7d_2g.6v4lgqjea",
                "target": "id_6s.sflrt8lrm_31.cdevwjqu6",
                "type": "jumplane"
            },
            {
                "source": "id_2n.me3jlmyxd_5g.qojmmevd4",
                "target": "id_u.1np6yef65a_5b.swo0nipvg",
                "type": "jumplane"
            },
            {
                "source": "id_3h.3brur5vhe_65.05poef2sq",
                "target": "id_2n.me3jlmyxd_5g.qojmmevd4",
                "type": "jumplane"
            },
            {
                "source": "id_3m.n2v3pm1rw_7j.x67k2ucjc",
                "target": "id_3h.3brur5vhe_65.05poef2sq",
                "type": "jumplane"
            },
            {
                "source": "Minor 1",
                "target": "id_2w.p4cqdvyzn_8n.dqv2xbxmt",
                "type": "jumplane"
            },
            {
                "source": "id_2w.p4cqdvyzn_8n.dqv2xbxmt",
                "target": "id_3m.n2v3pm1rw_7j.x67k2ucjc",
                "type": "jumplane"
            },
            {
                "source": "id_5m.xjdwh2k7g_7w.c968z43ye",
                "target": "id_3m.n2v3pm1rw_7j.x67k2ucjc",
                "type": "jumplane"
            },
            {
                "source": "Minor 9",
                "target": "id_5m.xjdwh2k7g_7w.c968z43ye",
                "type": "jumplane"
            },
            {
                "source": "id_3m.n2v3pm1rw_7j.x67k2ucjc",
                "target": "id_49.a9jcjph2t_72.auis232kk",
                "type": "jumplane"
            },
            {
                "source": "id_16.zrpfiua32_5h.tiszh74ve",
                "target": "id_u.1np6yef65a_5b.swo0nipvg",
                "type": "jumplane"
            },
            {
                "source": "id_1z.7o8wlqlge_5f.9jj80l07p",
                "target": "Capella",
                "type": "jumplane"
            },
            {
                "source": "id_32.ewtecnnhm_4q.2d6dsww9d",
                "target": "id_1z.7o8wlqlge_5f.9jj80l07p",
                "type": "jumplane"
            },
            {
                "source": "id_16.zrpfiua32_5h.tiszh74ve",
                "target": "Capella",
                "type": "jumplane"
            },
            {
                "source": "Minor 6",
                "target": "id_7d.d43hsg30s_45.wea2hp1q",
                "type": "jumplane"
            },
            {
                "source": "id_9d.iwsqmm92_4e.2j2xc7pd3",
                "target": "Minor 6",
                "type": "jumplane"
            },
            {
                "source": "id_ay.ldumvp5jq_3c.w858cg0g1",
                "target": "id_9d.iwsqmm92_4e.2j2xc7pd3",
                "type": "jumplane"
            },
            {
                "source": "Elysium",
                "target": "id_ay.ldumvp5jq_3c.w858cg0g1",
                "type": "jumplane"
            },
            {
                "source": "Elysium",
                "target": "id_bu.y6ub34h2o_5u.ujz4jvafi",
                "type": "jumplane"
            },
            {
                "source": "Minor 5",
                "target": "id_bu.y6ub34h2o_5u.ujz4jvafi",
                "type": "jumplane"
            },
            {
                "source": "id_bu.y6ub34h2o_5u.ujz4jvafi",
                "target": "Minor 6",
                "type": "jumplane"
            },
            {
                "source": "id_3m.opkky27tx_f3.ojdurvjmc",
                "target": "Bree Prime",
                "type": "jumplane"
            },
            {
                "source": "id_55.vg0f0x5dq_1q.yo5jhxets",
                "target": "Minor 7",
                "type": "jumplane"
            },
            {
                "source": "id_4i.6bi9x600o_28.bd6pdnqj7",
                "target": "id_55.vg0f0x5dq_1q.yo5jhxets",
                "type": "jumplane"
            },
            {
                "source": "Minor 7",
                "target": "id_7l.k900osuck_r.pj22alaq0k",
                "type": "jumplane"
            },
            {
                "source": "id_7a.x59vvbtp4_24.4mqz964bk",
                "target": "id_7l.k900osuck_r.pj22alaq0k",
                "type": "jumplane"
            },
            {
                "source": "id_7l.k900osuck_r.pj22alaq0k",
                "target": "id_8b.az7br6swg_13.zdfvlfrml",
                "type": "jumplane"
            },
            {
                "source": "id_9g.919zpit4l_1g.igdcjhvx2",
                "target": "id_8b.az7br6swg_13.zdfvlfrml",
                "type": "jumplane"
            }
        ]
    }

    get embellishments() {
        return this._embellishments;
    }

    get affilToFill() {
        return this._affilToFill;
    }

    get nodes() {
        return [
            {
                "x": 1044.0044941255042,
                "y": -526.1362544624393,
                "id": "id_t0.05toel0h_em.4wl36b1el",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1354.1690928634284,
                "y": -73.09806380181044,
                "id": "id_11m.63572u96_21.3j39j3ky8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1323.9954282586477,
                "y": -189.50539418350718,
                "id": "id_10r.zu2p8a6h_59.i6zo5ndir",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -205.67039973792748,
                "y": -721.6098110265045,
                "id": "id_5p.o4u64jkv5_k1.lybccusk",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 1403.6096092709845,
                "y": -208.8669084447656,
                "id": "id_12z.ly1xhgxve_5s.v7ihalhtk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -244.7898185133953,
                "y": 109.34368326101003,
                "id": "id_6s.sflrt8lrm_31.cdevwjqu6",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 974.4223478742483,
                "y": 585.292709272062,
                "id": "id_r2.f7d28wb7_g9.ajcn6d0ab",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -589.0089371030557,
                "y": -403.87638220803444,
                "id": "id_gd.0bkywg2ee_b7.vjshku185",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 711.724218130018,
                "y": -519.9008926965982,
                "id": "id_jr.q2l4cwu1_ef.wfk1scl4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1169.8645642290599,
                "y": -909.0366578655007,
                "id": "id_wh.v4h3wu5l_p9.1bib4y3ib",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 684.9697225486066,
                "y": -764.7151387955082,
                "id": "id_j0.ywrdiamlh_l8.pqtik9umd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 982.0152134464242,
                "y": 532.3355354321238,
                "id": "id_ra.0jpsqxg2_es.c2uqohqz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -599.0356339016757,
                "y": 807.9457378704956,
                "id": "id_gn.1a6j9rqaq_mf.y1ocgizbf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 718.9036290878273,
                "y": -473.6804774125667,
                "id": "id_jy.wj3pvgof_d5.ohwcqzpzx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -834.2445822930341,
                "y": -20.953611506905986,
                "id": "id_n6.8sz8bz6b_k.ybvp57n0j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 930.7159433739962,
                "y": 923.2016856419943,
                "id": "id_pu.prv1y23a_pn.79dufix2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1210.9761298294115,
                "y": 664.3425834089269,
                "id": "id_xm.z52ba2b_ig.cbzkkp5pp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 931.6536032578613,
                "y": -794.2767044837335,
                "id": "id_pv.nj2ihmgq_m2.9ylxa0he",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1274.889414451101,
                "y": 554.0171156664182,
                "id": "id_ze.w0oiqqjff_fe.0m6jqwbt8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1038.2383450485042,
                "y": -15.074155936441343,
                "id": "id_su.8kw85ngge_f.2o3thwjzcn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -987.6500108492434,
                "y": 636.8209559689926,
                "id": "id_rf.neewmeuac_ho.tjyis3xq8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 302.95525034282923,
                "y": -397.35338669280566,
                "id": "id_8e.ye05rcq8a_b1.cpzlxyod5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 935.2129269356178,
                "y": 424.224433741271,
                "id": "id_pz.7nybhkb7o_bs.82v6i3ln",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -505.54452512994584,
                "y": -475.0099704843502,
                "id": "id_e1.jlpd4cdh_d7.0cx6l27qj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1416.53517692258,
                "y": 729.588129694609,
                "id": "id_13c.j9l7pzpg_k9.l67s1mi2o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -468.79562404318085,
                "y": 629.8521120065041,
                "id": "id_d0.sn4mvfajp_hh.uoc4yk1ut",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -907.9187482311365,
                "y": 304.4408697685976,
                "id": "id_p7.x2p488rp_8g.fvd7x0rcl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -846.2147636518188,
                "y": 771.2393514780786,
                "id": "id_ni.7qc0grozd_lf.8m76klkro",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -388.2307926207037,
                "y": -438.4089448120676,
                "id": "id_as.8b3uz80z_c6.epzq8zb2n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1434.1458911837476,
                "y": -942.8490624985697,
                "id": "id_13u.592p5zrd_q6.ukduyh1o7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -259.93540574747476,
                "y": 5.257558268573007,
                "id": "id_77.xoaagk3gc_5.99smzliqiu",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -734.3502003439619,
                "y": 163.87058738618384,
                "id": "id_ke.cluy3mspe_4j.vca4i46th",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 397.6678261914526,
                "y": 340.4509280420691,
                "id": "id_b1.o1i3k12lk_9g.g8ehycs6w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -614.0587294494923,
                "y": 801.1385003235273,
                "id": "id_h2.2442x89a_m9.4zhvcxs8q",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -137.51971748049846,
                "y": -137.45455374943253,
                "id": "id_3t.ipjxsn9ca_3t.gd3nr0ize",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 470.95251896979585,
                "y": 345.3219728116612,
                "id": "id_d2.yagq3o5mu_9l.bl9yop3h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 182.00011971026743,
                "y": 886.0144953447514,
                "id": "id_52.005l2f71h_om.0isam2eq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -409.4918061906146,
                "y": 340.9486773723445,
                "id": "id_bd.hpdpjogr4_9g.y5hhoyokd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -301.3650733614784,
                "y": 641.5501220048022,
                "id": "id_8d.d54v24lz_ht.jsyhpyp5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -646.847339181508,
                "y": -814.946441357026,
                "id": "id_hy.ui5gg2wo_mm.y2l61o18",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 964.6048483743882,
                "y": 226.66985122785013,
                "id": "id_qs.lrvt09br9_6a.o44ku8j5l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -343.4625595273707,
                "y": -620.4369229496583,
                "id": "id_9j.gnh6dsj1k_h8.fq92rz0c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 666.8924236709443,
                "y": -67.99723447146948,
                "id": "id_ii.w4kx2r51_1v.zweyz2cf7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1147.089548123171,
                "y": 279.2685173051791,
                "id": "id_vv.381ygkqo_7r.9nzxymto5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -241.86333585749082,
                "y": 450.05812575602044,
                "id": "id_6p.v2vspwmde_ci.23bwy6yzn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 113.44337573567827,
                "y": 61.58148582586841,
                "id": "id_35.fym4z9mvl_1p.kxlswadum",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1461.1076827644174,
                "y": -854.6043844180535,
                "id": "id_14l.3vk1ozh4_nq.lra5qldf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1092.7593773569338,
                "y": 22.214716328341524,
                "id": "id_uc.rc5icwxjn_m.7q9szas8uk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -592.7812192106571,
                "y": -17.416277318142534,
                "id": "id_gg.s4gkaaavs_h.ezhu1l0d4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -314.07211081631715,
                "y": -775.6502262232323,
                "id": "id_8q.2lgehb6z_lj.neoyd94w9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 468.95194063210056,
                "y": -993.4512283285027,
                "id": "id_d0.y9pqpsvkt_rl.g8sibizjq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1426.0432818126005,
                "y": -152.7985140757196,
                "id": "id_13m.1k3ctp5_48.sqvh0n2nm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 970.2681551327705,
                "y": -909.0813739168455,
                "id": "id_qy.9nj1ngbm_p9.2xgkxkst7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -389.46932915062644,
                "y": -158.9724137398689,
                "id": "id_at.gw90r0uq5_4e.z08xoc8ai",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 443.09752493310566,
                "y": 423.08933871600675,
                "id": "id_cb.3ie4frpcd_br.37s6qixa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -554.2502306891236,
                "y": 617.4565148913857,
                "id": "id_fe.90argw0c_h5.gfn5proth",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 399.31631961895073,
                "y": 594.3256731263973,
                "id": "id_b3.bdy7hr28m_gi.bq2lskunm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -898.5647302660457,
                "y": -318.3401662934165,
                "id": "id_oy.kbw1znqdp_8u.c8usqyt7t",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1441.486314790042,
                "y": 615.5272457234303,
                "id": "id_141.hi9i3op5k_h3.izb6cpht",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 394.594020824117,
                "y": 120.89517386455509,
                "id": "id_ay.ldumvp5jq_3c.w858cg0g1",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -243.26708914008475,
                "y": -73.55267874116805,
                "id": "id_6r.9m5b6y9v_21.jw9s2199i",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 69.72674651268358,
                "y": 512.8879199971816,
                "id": "id_1x.q5v32jk4q_e8.vyqsmtn9b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 502.1113189724622,
                "y": 389.0998156005603,
                "id": "id_dy.409p4kx0w_at.3lczvo5nc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 52.70453242566282,
                "y": 638.5741343206112,
                "id": "id_1g.pd2nxnble_hq.ko2t6vlio",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 337.5253073489896,
                "y": 158.07027876566917,
                "id": "id_9d.iwsqmm92_4e.2j2xc7pd3",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -216.44023044203345,
                "y": -566.2386533723671,
                "id": "id_60.fuje3dzkb_fq.8lam0te8q",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 1439.1071853209492,
                "y": 911.5572524434822,
                "id": "id_13z.3uwu6hbjj_pb.k2764bnxo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -689.0389701275503,
                "y": 999.4447423086363,
                "id": "id_j5.1ei6ula7_rr.g0dwapiel",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1059.6746201918186,
                "y": 965.681037514817,
                "id": "id_tf.oab2v925_qt.oimhi8enk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -840.6209876685718,
                "y": -292.4850720200234,
                "id": "id_nc.mcsstntk_84.hgniq4vho",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 982.40295068209,
                "y": 259.8195534149572,
                "id": "id_ra.ei82ev1wb_77.ti5311358",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1256.9639667255287,
                "y": -973.6237285852409,
                "id": "id_yw.ypatxomf_r1.mgcoiet6l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 277.74965794618174,
                "y": 705.8049103968171,
                "id": "id_7p.qzk1hbagf_jl.sz5wdpur7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 262.79409254464736,
                "y": 458.17896885644996,
                "id": "id_7a.sl56jkc5m_cq.6fxyydex",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1265.7092857180314,
                "y": -947.6195483775598,
                "id": "id_z5.pj8fn26ri_qb.maxnd8ki8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 70.65096856041646,
                "y": 870.0135986243897,
                "id": "id_1y.nfnl7jlt9_o6.0hmggtd5m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1205.0307355911077,
                "y": 218.7825614456017,
                "id": "id_xh.13tzznt5i_62.s676q3mc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1109.3328788459407,
                "y": -251.75045037227676,
                "id": "id_ut.bzesmvve_6z.r0l0gaf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 243.06647973854092,
                "y": -336.42901071497363,
                "id": "id_6r.2e5ofkk2v_9c.ffzx9eb4w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1005.2274769845908,
                "y": -89.80538208839926,
                "id": "id_rx.86t5zdwjb_2h.szrwn3rar",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -763.4793563503335,
                "y": -530.0433681659382,
                "id": "id_l7.h98ulg2_eq.1k7dv5k4h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -257.67856637253976,
                "y": 918.6729245816446,
                "id": "id_75.off6xpjqf_pi.o83yw6s86",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 151.39605831302902,
                "y": 167.29116653173332,
                "id": "id_47.e9ahvntsh_4n.ahcnyr40h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -255.98452259920828,
                "y": 856.8273083467304,
                "id": "id_73.zfxvwrckt_ns.ts6wc3l6a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -993.7085421341981,
                "y": 245.38289231957265,
                "id": "id_rl.pi9qpe187_6t.ds882du37",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1270.3029118870882,
                "y": -369.38377501007926,
                "id": "id_za.awknnh6el_a9.dtdenaxsn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -328.24820740554446,
                "y": -9.37594963273682,
                "id": "id_94.8xod4o1xg_9.dj8b0nrmab",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -75.15929494831562,
                "y": -897.2618188250925,
                "id": "id_23.5qg2cdpgw_ox.9fbf35oz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 86.00265887792762,
                "y": 502.3871980243721,
                "id": "id_2e.03g1w6i8b_dy.dxt3zvzjh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1008.1771570843621,
                "y": 451.70347787092396,
                "id": "id_s0.6dlfvfxq_cj.pbpgor6zn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1100.7483624773827,
                "y": -665.2804547896518,
                "id": "id_uk.qxvll9owk_ih.a3gwco5s6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -281.328408604973,
                "y": -358.2160012653093,
                "id": "id_7t.btm8cian4_9y.7rxr6ivn",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 169.87658254345365,
                "y": -917.1785866217301,
                "id": "id_4p.vk1u2cmw3_ph.6fg4y3mm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 463.46119295017684,
                "y": -928.1378775461188,
                "id": "id_cv.glpf23fkr_ps.4yotbyx7k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 612.0947082404941,
                "y": 664.1443903941929,
                "id": "id_h0.3eqph4zbq_ig.574oezkf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 265.36427242309446,
                "y": 149.89990717613387,
                "id": "id_7d.d43hsg30s_45.wea2hp1q",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -515.0577613578713,
                "y": -145.39794633908662,
                "id": "id_eb.22uwwfimu_41.ebql1dll3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1126.1535648777513,
                "y": -371.72320042994045,
                "id": "id_va.5j0q0xbhc_ab.q19n0ha5g",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 252.3642297365384,
                "y": -576.9887208445241,
                "id": "id_70.d41i3cqqk_g0.zldrcllf7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 582.9196805853651,
                "y": -953.7657333085727,
                "id": "id_g6.x3wm84zge_qh.rke1x06rn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -169.01177994174918,
                "y": 431.4086794429427,
                "id": "id_4p.0f9ls149v_bz.epncj4hf7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1359.693967219891,
                "y": 29.14256335956452,
                "id": "id_11r.ozdqg20s_t.54rfp6uzof",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -901.4578852255675,
                "y": -229.3083862913296,
                "id": "id_p1.ghf3cmxi_6d.b3o2jrmpl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -310.593849325684,
                "y": -544.6552946561138,
                "id": "id_8m.ldmmtue78_f4.nl9fe0axp",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -477.5520897407872,
                "y": 254.07139928748802,
                "id": "id_d9.jviarfmrm_72.2kj7dvt1r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1177.3121634687259,
                "y": 527.8868059411325,
                "id": "id_wp.b8kar8o0f_en.vxatg447o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1363.2478488171082,
                "y": 274.1931839484341,
                "id": "id_11v.8x7mu72v_7m.6yd6umjt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 747.0550164673139,
                "y": 195.48071266295779,
                "id": "id_kr.1zauje8kd_5f.hb04ohf1s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1068.077491251623,
                "y": -157.57825094943234,
                "id": "id_to.2sffjnq7_4d.ktevjohzf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -272.9777256170248,
                "y": 738.6562816475791,
                "id": "id_7k.z74rl8le9_ki.nmjh5lw3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 210.40372067201815,
                "y": 102.5343317369734,
                "id": "id_5u.ej7zp7iz7_2u.j8hs4ulvu",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1122.1680003645547,
                "y": 27.663908763595828,
                "id": "id_v6.61q83m05h_r.nwfbs5b72",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -775.6954140047342,
                "y": 736.4209398556211,
                "id": "id_lj.p198hlpn8_kg.f5jdbe8fs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -219.83166673823348,
                "y": -529.7332577708289,
                "id": "id_63.txu8rd843_ep.qeavhf9wk",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -103.42569449753341,
                "y": -580.8898635594027,
                "id": "id_2v.fbp7aerh_g4.w19h2lk3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 675.6319324478541,
                "y": 665.20459492282,
                "id": "id_ir.mqzfum18_ih.7d5kwm12n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1399.3565270270765,
                "y": 691.7765066934294,
                "id": "id_12v.cu24hyuh_j7.rycp2e1jj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 247.68982058851407,
                "y": -793.8368942830101,
                "id": "id_6v.ou09p4346_m1.u4m510ct",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -327.58881346208545,
                "y": -735.6114301035328,
                "id": "id_93.l73oifgsr_kf.m0evs92hb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -376.35142959594214,
                "y": 266.8172681476451,
                "id": "id_ag.cngarsslm_7e.tf6gnnkhu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -487.761060803826,
                "y": 826.4338098544454,
                "id": "id_dj.rec1wie2_my.fm7tz0c8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 978.4254105425498,
                "y": 640.8586365582644,
                "id": "id_r6.fbbycqkjh_hs.uwsjp92nk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -94.87269324115005,
                "y": -351.02728221239147,
                "id": "id_2m.vf0dj42ya_9r.0zcvn20qw",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 651.9500764397621,
                "y": -883.8958843647026,
                "id": "id_i3.y7arl7x9i_oj.w92dpo6li",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 557.6098027441383,
                "y": 222.81481060343026,
                "id": "id_fh.lyayg1vud_66.tbzsxcqdb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1403.1543614535585,
                "y": 503.88995831349075,
                "id": "id_12z.5k1vytgr_dz.w1dw80kzl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -396.65345983460907,
                "y": -739.4109098907484,
                "id": "id_b0.nivtld9g7_kj.esjetrva",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -36.02853632369363,
                "y": -601.5535733331734,
                "id": "id_10.10ze2dcmh_gp.jxfimlbz",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -326.62782578743906,
                "y": -34.849870489904106,
                "id": "id_92.mlnu8k6kq_y.ulfk2mb6yh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -433.8992031126295,
                "y": 325.96527194673354,
                "id": "id_c1.wdd7xo1qc_91.yqzq7f33c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 115.41059156190113,
                "y": 2.6312729778265975,
                "id": "id_37.es4k5n994_2.mq4o6zbrv6",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 508.4619541766508,
                "y": -574.2833201193913,
                "id": "id_e4.gmoxmjrwa_fy.a76l07bof",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1004.6841532427268,
                "y": 784.6942423013572,
                "id": "id_rw.omnuqdvuo_ls.ozqkh6hy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 916.2618893413796,
                "y": 878.1666310338783,
                "id": "id_pg.9fepj0av7_oe.5zyc5f6bn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -190.2523037176809,
                "y": 742.6503873565018,
                "id": "id_5a.92zhczydj_km.newh0d6vf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -874.7515629616639,
                "y": 635.7596584661978,
                "id": "id_oa.r20x6bcb_hn.rcimiim1j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1415.984918871818,
                "y": 422.7591902959027,
                "id": "id_13b.zggdhukee_bq.rbws61s7n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 986.625653332562,
                "y": 984.8727019370317,
                "id": "id_re.miuhcis3l_rc.vf0s4x4g7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -30.04606466928874,
                "y": 191.80298392807185,
                "id": "id_u.1np6yef65a_5b.swo0nipvg",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -761.7382140271641,
                "y": -130.82315059164705,
                "id": "id_l5.qkq43aink_3m.tmswwjrjr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -767.583793835376,
                "y": 186.16245626478894,
                "id": "id_lb.l0lhgspn_56.5ujk53kce",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 417.5716242608705,
                "y": 760.7435952992519,
                "id": "id_bl.kktp95w4_l4.qrp6k8jl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -638.5987600248175,
                "y": -277.1354681778972,
                "id": "id_hq.ljzqx1ix_7p.4vkeioqiv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 343.5101323752481,
                "y": -300.5033613992882,
                "id": "id_9j.id4qhzgmf_8c.i4ctuylf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 824.7796347792932,
                "y": -880.4443067658161,
                "id": "id_mw.s2en1s3hg_og.fztkr3ldl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 728.7275248409235,
                "y": -605.5315619242698,
                "id": "id_k8.q6ved2q1l_gt.j4wjwv8o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1473.1297770978663,
                "y": 298.17161840206063,
                "id": "id_14x.4o6vou93g_8a.66f10i4z",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 369.703662731896,
                "y": -336.1140502905391,
                "id": "id_a9.pby36laja_9c.43t4oxv06",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -877.195707337828,
                "y": -51.14361540098673,
                "id": "id_od.71mx6c0ch_1f.564iq41my",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -536.2558734598601,
                "y": 812.7420434733042,
                "id": "id_ew.97m15noai_mk.qpos398dj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 193.37759595919624,
                "y": 393.0979076722326,
                "id": "id_5d.dld47q4fv_ax.3ivzajh3f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -132.32607681813136,
                "y": -69.93064515536628,
                "id": "id_3o.bqlfu9vy3_1x.xi46hra9q",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 990.7208951762123,
                "y": 585.1265100654396,
                "id": "id_ri.pya32lopm_g9.4jygbvrwg",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -563.2638997442177,
                "y": 669.265557050152,
                "id": "id_fn.9i0i8dorq_il.9k5tvbyyk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -202.93162512990978,
                "y": 284.3404117223183,
                "id": "id_5m.xjdwh2k7g_7w.c968z43ye",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 666.0762943531442,
                "y": 365.07526065081083,
                "id": "id_ii.2qvl7s9e7_a5.2pjczra4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 682.3012733160992,
                "y": -885.2695737513518,
                "id": "id_iy.aug7hcsjp_ol.9pd8dw6wn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1331.2942082103614,
                "y": -442.72597948032285,
                "id": "id_10z.alaktff5e_ca.q4var12ck",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -64.26907722361284,
                "y": 478.55702579559124,
                "id": "id_1s.9oq2erdoy_da.k1wlfsjf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -748.9702758133101,
                "y": -357.937821323373,
                "id": "id_ks.yxh6s3gm_9x.xrezp71j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -866.4050476976456,
                "y": 403.77042832408665,
                "id": "id_o2.ekxwldh0a_b7.rqh3qn0xl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 110.41421036212068,
                "y": 170.06572323862156,
                "id": "id_32.ewtecnnhm_4q.2d6dsww9d",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 591.5814863287214,
                "y": 659.2616768188054,
                "id": "id_gf.kxltqozia_ib.9f4skkwzk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -527.6632081059504,
                "y": -0.7594564384816067,
                "id": "id_en.nvimy24hs_0.rc976o8xpip",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1216.9136031616276,
                "y": -299.49169856948777,
                "id": "id_xs.ww12hkcf_8b.hp8os8p3w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 818.0769319496048,
                "y": 420.36224102935853,
                "id": "id_mq.2rpc4sz2_bo.d1gptu2yf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -130.47303569551048,
                "y": -953.9036963751215,
                "id": "id_3m.h11ybma8y_qh.wj6uw2gzd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 589.0112500098919,
                "y": 637.9140531352512,
                "id": "id_gd.0ekvp2t9_hp.wwm29qza9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1267.8022402805027,
                "y": -704.3821548252955,
                "id": "id_z7.svpblztqg_jk.dr9tcxbjb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 538.5837298650406,
                "y": -441.8096550167347,
                "id": "id_ey.l0ii0r7s_c9.t5b9iqojs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 651.7051658332937,
                "y": 416.45475564184494,
                "id": "id_i3.pdw7tdv49_bk.gdd2uod4a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1194.9726304591604,
                "y": -480.760075166947,
                "id": "id_x6.z0j1oiyf_dc.rd22etfxf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 368.9533418598776,
                "y": -455.55530869744973,
                "id": "id_a8.ybj48or16_cn.jzohdfmw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1470.386441807566,
                "y": -605.9095260683191,
                "id": "id_14u.dwttuclnf_gt.wqqujbnck",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -33.202326944008746,
                "y": 73.81578536081838,
                "id": "id_x.7a7rkltcd_21.td9a57eab",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1235.9240224242412,
                "y": -662.2440156206176,
                "id": "id_yb.x9j6uj5mg_ie.8s8sjgo29",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 841.9511468675437,
                "y": 582.018701221147,
                "id": "id_nd.y8ophw7l8_g6.0o8ivburd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -762.3659871560209,
                "y": -477.2595011028171,
                "id": "id_l6.d6bhvsfg_d9.9cba7cs95",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -778.3952066068352,
                "y": -131.10131455985834,
                "id": "id_lm.e86rc8tv_3n.3naxk0a1w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 444.0786586360921,
                "y": 664.8438367931481,
                "id": "id_cc.2txwaxmad_ig.udm1s1si",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 344.7948725064989,
                "y": -820.1662789451354,
                "id": "id_9k.sm5kkviog_ms.5zhwrymb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 602.9674496743262,
                "y": 407.80306521133,
                "id": "id_gq.yttbya1ip_bb.swrt6eogd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 14.432450713312846,
                "y": -473.4033190554188,
                "id": "id_e.fkgf4xxhaa_d5.eip94zlvu",
                "nodeType": "system-minor",
                "affiliation": "bree-solfed"
            },
            {
                "x": -371.1738604024341,
                "y": -164.02282564916027,
                "id": "id_ab.69bmpoy56_4k.0tkybpwe5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1354.925230910787,
                "y": 160.23589545304617,
                "id": "id_11m.xb3kn3blj_4g.8hpxrzc0d",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1136.5859352911111,
                "y": -499.67979057117293,
                "id": "id_vk.l3deafqa_dv.oh0b4bib5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -594.2614375265933,
                "y": -478.78762037206184,
                "id": "id_gi.9etmnhuta_da.scr7s1dlu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 596.8849611747366,
                "y": 937.5810857770723,
                "id": "id_gk.vuwqy57ng_q1.kx34yv8cg",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -705.3059124533759,
                "y": -37.06011415311309,
                "id": "id_jl.b0gng8vcu_11.25wooyn1o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -422.235081122643,
                "y": 457.37504482980694,
                "id": "id_bq.8gny0jao_cp.di23aoqci",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -72.34638693157456,
                "y": -503.29721017358287,
                "id": "id_20.cgx1162ma_dz.ap6mynxnd",
                "nodeType": "system-minor",
                "affiliation": "bree-solfed"
            },
            {
                "x": 1481.6938109062553,
                "y": -361.3277520506415,
                "id": "id_155.oz6fwd9e_a1.bsrll6f9r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 485.72063977126527,
                "y": 414.14391703999877,
                "id": "id_dh.pxy638pja_bi.56ild2ioa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 426.94972367897526,
                "y": 210.84874670872455,
                "id": "id_bu.y6ub34h2o_5u.ujz4jvafi",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -416.38819012894146,
                "y": -810.118861512672,
                "id": "id_bk.dz3ecnotd_mi.4a1lp57q",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1067.1269112853483,
                "y": -668.2305619271242,
                "id": "id_tn.4kh6846o_ik.8at3i2bg8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -886.8510286534117,
                "y": 489.0085751778756,
                "id": "id_om.umxlcc6cs_dl.0b4307q75",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -473.2023307154284,
                "y": 287.5995839075317,
                "id": "id_d5.7a7xwndhp_7z.ll26q2v5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 881.3940484040997,
                "y": -877.0571959397482,
                "id": "id_oh.e6oq05kn_od.224j7rc2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 290.059475001299,
                "y": -723.489127346443,
                "id": "id_82.252v5w9el_k3.hlwq47si",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 316.22377982580815,
                "y": 591.1139082363266,
                "id": "id_8s.820o6bz06_gf.43mi3grdo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 262.9207365673078,
                "y": -76.12866467973765,
                "id": "id_7a.x59vvbtp4_24.4mqz964bk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -504.2142949063552,
                "y": -257.432911976117,
                "id": "id_e0.7pq55iuk_75.fl1xvqnk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -807.5009899968945,
                "y": 380.6395493543762,
                "id": "id_mf.i1a6tbr3j_ak.n0utbtltr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1102.039591632381,
                "y": -896.8676526993108,
                "id": "id_um.1fb6qm0q_ow.v8h7ctn4r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 126.1041943932853,
                "y": -961.3736918440972,
                "id": "id_3i.3r1akitaj_qp.dgaystc6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1108.462341465035,
                "y": 504.0636245281314,
                "id": "id_us.gn704eae_e0.2aggrwz0r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -283.5350728250471,
                "y": -939.0843975532523,
                "id": "id_7v.j9gcvm1av_q3.31dnhb4d",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -694.2824106350356,
                "y": -899.1468290054163,
                "id": "id_ja.a605f5ue_oz.5aagcheht",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 275.42155007442034,
                "y": 927.1618061459815,
                "id": "id_7n.f6bu8zqk_pr.5tp86wffm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1257.831565825029,
                "y": -473.2829751812701,
                "id": "id_yx.txpj9j57_d5.a6qhn4459",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -176.47423216897903,
                "y": 592.6112801750128,
                "id": "id_4w.h2lrxslh3_gg.m07vynbc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 718.55455317306,
                "y": 142.266741101452,
                "id": "id_jy.jyp8drhmm_3y.9lp2mdxbz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -381.9209903920025,
                "y": 353.38902498491143,
                "id": "id_al.x5lq74xq4_9t.e06cl7f1k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 185.19989211699703,
                "y": -444.551092113914,
                "id": "id_55.7725zxdup_cc.ju7r4r2rq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1463.9844248471195,
                "y": 48.495020275369825,
                "id": "id_14n.zftbq2buo_1c.htjnz3dxf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -941.5815884037761,
                "y": -924.568795096365,
                "id": "id_q5.kxql6s5u9_po.kh5pcekjl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -447.75873234690084,
                "y": 567.2244966908945,
                "id": "id_cf.rbbezmhhb_fr.82y48f89l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 648.001178215407,
                "y": 518.1540567772913,
                "id": "id_i0.01iyy6hhr_ee.5jno87jra",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1025.4500652129748,
                "y": -504.0964611802003,
                "id": "id_sh.g7a8qdngg_e0.3h0hqp64",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -194.35243776276673,
                "y": -933.3023079091238,
                "id": "id_5e.corc3sj2u_px.avsh78m3f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -712.8988262578825,
                "y": -498.72678019151095,
                "id": "id_js.wcvmypai_du.q5wnmz1ac",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1277.8742621386887,
                "y": 983.3417727743913,
                "id": "id_zh.vh1kocj4_rb.caxr0q7y",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -886.8217488595883,
                "y": 796.3219955542784,
                "id": "id_om.tkzij66h8_m4.blb0vutni",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -995.0134952369807,
                "y": -594.6195511618587,
                "id": "id_rn.0hhmtdh9q_gi.maxs1ldre",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -52.34118641883242,
                "y": -80.91899072468095,
                "id": "id_1g.ca6e61spl_28.x30fiwflm",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1093.727618088853,
                "y": -959.958588590363,
                "id": "id_ud.q6zqzf63c_qn.yibwqezra",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -263.444067719514,
                "y": -351.2453760265611,
                "id": "id_7b.fzif8vtqd_9r.8u09i0ann",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -666.5271438360395,
                "y": 986.1956975228136,
                "id": "id_ii.iz6f7ytle_re.71mgouuy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1337.9296663614687,
                "y": 913.3689158680927,
                "id": "id_115.xguihu0o_pd.da44zt4u",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -768.3453417695126,
                "y": -652.8909660425218,
                "id": "id_lc.cfk9k7rah_i4.w2owtjc5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1154.8824634504886,
                "y": -371.3710520659297,
                "id": "id_w2.vro7qb6t_ab.dcvsziuo9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1267.7646261867685,
                "y": 743.7110911098412,
                "id": "id_z7.riyedl01_kn.plko076ss",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -364.6352109211267,
                "y": 448.7743743790045,
                "id": "id_a4.mv8efcqqu_cg.rvl7lho1n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 977.5784609359591,
                "y": 780.0387294557645,
                "id": "id_r5.ktoo8rgmk_lo.1e6ym36vm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -937.9419733144741,
                "y": -383.16853766910833,
                "id": "id_q1.xwspg7xi_an.62fakd2d",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 337.1949645961006,
                "y": -957.5756159907133,
                "id": "id_9d.70o9nkxqj_ql.kpzxtswjj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1377.3156093934172,
                "y": -14.486424490381296,
                "id": "id_129.bd12l4nzc_e.hiemcugjwr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -661.7312126003796,
                "y": 753.113001231653,
                "id": "id_id.qbngdsd7p_kx.42g6od0b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -556.5808009901982,
                "y": 874.1109696104368,
                "id": "id_fg.kwpumw70g_oa.3ztebztxp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -165.48949672926165,
                "y": 58.54970021841109,
                "id": "id_4l.hmdyjdsbc_1m.jseta5j69",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1156.3956314379666,
                "y": 265.22016000135454,
                "id": "id_w4.e8qkw5qcm_7d.7xbs9e1iu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 36.61867675465419,
                "y": -79.79542192408485,
                "id": "id_10.m9szdj83o_27.smv7e20jh",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 189.7031662931645,
                "y": 56.460271705996774,
                "id": "id_59.pbaxcu8bg_1k.gkifpzdh6",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -324.08877197456627,
                "y": 377.28153380953086,
                "id": "id_90.371qtu61c_ah.a4v8ovknc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -288.0443511450311,
                "y": -290.44589167675963,
                "id": "id_80.1lh8w5329_82.g1vislqmr",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -383.95733348017905,
                "y": -564.3018912401585,
                "id": "id_an.ygpcmpbcg_fo.av91cuyxd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 194.0495513615174,
                "y": 674.5454332198287,
                "id": "id_5e.1s7v9ch4n_iq.jmvqd2e2h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 23.617615879153277,
                "y": -840.131362024171,
                "id": "id_n.m8fhig69gh_nc.4q8tr9u4e",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 145.75290700777714,
                "y": 819.0728254681924,
                "id": "id_41.r3rmnn6h5_mr.2mdqtkrsn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 954.5684261618323,
                "y": -142.41926631230763,
                "id": "id_qi.kgohoceaf_3y.f3daempll",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -750.5397391261606,
                "y": -254.52585970265943,
                "id": "id_ku.jfi2gzvhc_72.ixiidbyoe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 194.87918533153334,
                "y": -536.4830210885918,
                "id": "id_5e.vnf9qzr2p_ew.hdzty5k8m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 267.06294795850886,
                "y": 213.18915638529256,
                "id": "id_7f.29kwec63h_5x.6t5a3a8vf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1073.724212459087,
                "y": -546.3165147128204,
                "id": "id_tt.q2kuu0g9n_f6.be7b6by9c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -320.13879083820325,
                "y": 270.16326514742855,
                "id": "id_8w.4zvfb8zzb_7i.5vlar509",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 180.31341564269474,
                "y": -168.1268958373488,
                "id": "id_50.ba6pxeudt_4o.4kgga193m",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -862.4112178050166,
                "y": -648.0704682394105,
                "id": "id_ny.esxs067il_i0.2jbrkysq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 953.8864249314986,
                "y": -255.71209717846034,
                "id": "id_qh.vwt1hx2qp_73.pmvltbl5x",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 321.29879680354657,
                "y": -356.0565613259374,
                "id": "id_8x.ar8nw40he_9w.21axb378x",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -54.30593764739831,
                "y": -229.25870109680216,
                "id": "id_1i.b0htrmrv5f_6d.9b9yi1tmb",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 914.6727846172485,
                "y": -530.2890290350963,
                "id": "id_pe.o7xft2rbm_eq.aekxsi6sl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 607.298362681071,
                "y": -747.1910185799038,
                "id": "id_gv.aqoeqdvkk_kr.6vk5v2kyt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -710.9709385282528,
                "y": -549.3593174825739,
                "id": "id_jq.yyc3vxn4m_f9.cxobe52zi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -719.5535505859509,
                "y": 963.1314476315454,
                "id": "id_jz.jxegf5kw7_qr.4qctjmgga",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 601.1972670011048,
                "y": -989.448116002134,
                "id": "id_gp.73not7hb_rh.g4rat1xa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -81.26771830215512,
                "y": 482.3915687845508,
                "id": "id_29.9mynxz5l4_de.e3h171jeu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -385.12061097863057,
                "y": 548.1031587180403,
                "id": "id_ap.4cb84nt6o_f8.3poz178g",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1258.9448461715965,
                "y": -869.7583211358291,
                "id": "id_yy.y0iqqwkh_o5.ras8b9hkp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -29.237342475791024,
                "y": 781.263877572128,
                "id": "id_t.8jlg7wvu7_lp.9hzgzpvhn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 198.00572275891795,
                "y": -808.8957035373037,
                "id": "id_5i.07f01cixf_mg.w8txzqamu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 709.5788729272904,
                "y": -680.8184090654636,
                "id": "id_jp.ku7w8awx_iw.tgnoylbn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 185.215113839972,
                "y": 638.4786369699368,
                "id": "id_55.7qscnb2vw_hq.h8bab9ijh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1369.8238589704706,
                "y": 330.79613118660313,
                "id": "id_121.tnpypi9x_96.snsaog4wt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -882.0750916661854,
                "y": 560.3044945621368,
                "id": "id_oi.2pbh5wj7_fk.aymhxs9mo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 671.5405514756526,
                "y": -811.9014608608591,
                "id": "id_in.jgjywnwdi_mj.wgak32ihb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1345.0523910658058,
                "y": 729.6493401663638,
                "id": "id_11d.1vwcvelz_k9.ndjm4s72",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -599.2594907228424,
                "y": 309.2711753934459,
                "id": "id_gn.9casrpu7p_8l.9rfyj2esi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 196.50243328035322,
                "y": -726.3484019030084,
                "id": "id_5g.i35iz5ow3_k6.cjj1esaph",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 820.3988344342486,
                "y": 201.0805614514286,
                "id": "id_ms.ecw0p3gl8_5l.2weoawfk9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 273.5625004101664,
                "y": -27.709149171126796,
                "id": "id_7l.k900osuck_r.pj22alaq0k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1214.2696713857758,
                "y": -87.01564922690648,
                "id": "id_xq.9phsdh2xm_2f.0ka4owp9w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -379.6272088021559,
                "y": 445.3453890571204,
                "id": "id_aj.mkv1xtiln_cd.cfmgzil5c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 620.0843865336196,
                "y": 523.281065857308,
                "id": "id_h8.31d4yzs28_ej.a49eplfva",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1306.091351473102,
                "y": -469.5128377315267,
                "id": "id_10a.3ae3e90kg_d1.igmygj7z9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -676.9578582109061,
                "y": -376.4104422784427,
                "id": "id_is.yhdtz5w5c_ag.erxlf1ntj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1030.3802578409502,
                "y": -837.5886483650263,
                "id": "id_sm.dotb5jb0h_n9.l6vz7n3rh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -754.0114050898824,
                "y": 785.5565337979372,
                "id": "id_ky.0es46672l_lt.k19n2kqin",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 678.3560327896314,
                "y": 860.2060389643173,
                "id": "id_iu.ctf2dbi8c_nw.7f0yca1xe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -48.272328568716716,
                "y": 411.50885425973365,
                "id": "id_1c.9sxrf5yy1g_bf.ibh3r86pt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 704.0197500550753,
                "y": -406.9592196273195,
                "id": "id_jk.0plgib0tp_ba.yj5cmt3da",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 181.65001934071415,
                "y": -946.6769545736443,
                "id": "id_51.nefavuxaq_qa.odbzqe6lg",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -916.8456207336109,
                "y": -33.522457861216935,
                "id": "id_pg.ufxa43vo_x.it3skzlnd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1055.1740020403104,
                "y": -135.52742508927724,
                "id": "id_tb.69i8lzrx_3r.izjjm9wgw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -20.316944780741323,
                "y": 734.3332385949132,
                "id": "id_k.berdiw7dtf_ke.bzvkvj2w8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1153.3976183000582,
                "y": -254.03467004279446,
                "id": "id_w1.ebba241c_72.18xkcwqrd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1473.4033629614305,
                "y": 157.42426189230264,
                "id": "id_14x.eiravtfse_4d.f9ud2903",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 207.74807734452816,
                "y": 472.2226448198396,
                "id": "id_5r.qxiaodj3r_d4.80jpsv11b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -113.86588249079591,
                "y": 439.86087878730905,
                "id": "id_35.v66m330l1_c7.uzp5s9ng9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1390.7847344040238,
                "y": -78.51631858114683,
                "id": "id_12m.s90kgl4p_26.il5cy76sy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1347.5684054189433,
                "y": -151.13546588371742,
                "id": "id_11f.kgniu3n4i_47.4vkanyt1h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 772.862720869332,
                "y": -33.263531908368236,
                "id": "id_lg.v233rx9df_x.9hjcer3wf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -280.13842723738264,
                "y": 875.9608677572976,
                "id": "id_7s.4zeglp5m_ob.yla8uxbfa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 899.2326302222561,
                "y": 42.81951237035037,
                "id": "id_oz.8dhlfymki_16.ti3637wu6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 636.4812485124614,
                "y": 232.30737385321686,
                "id": "id_ho.hbp4p95hf_6g.b2cu1i8b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -781.5545876024179,
                "y": -921.5751868477496,
                "id": "id_lp.jyqu7kphd_pl.kpfx162wr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1144.1563310165707,
                "y": -838.0611490134706,
                "id": "id_vs.5mls2rfu_na.278yv0dx7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -82.65990804326293,
                "y": 987.9805363159089,
                "id": "id_2a.nr8o3vyiy_rf.zarwhg9z",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1130.32617435959,
                "y": -565.6227881167464,
                "id": "id_ve.bqpzo8et_fp.mf4svvlr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 759.4523280700735,
                "y": -69.9486837512136,
                "id": "id_l3.ga7tgp0gp_1x.y5hseo3b7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1305.978889347325,
                "y": -792.8439363079875,
                "id": "id_109.z8n27k5m_m0.udqoxbxpf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 88.17833683259869,
                "y": 799.4300310761839,
                "id": "id_2g.6f4heb24h_m7.fhbj2qkgf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 71.21315384222044,
                "y": 195.26507250241025,
                "id": "id_1z.7o8wlqlge_5f.9jj80l07p",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1022.0051093377883,
                "y": 551.515357366683,
                "id": "id_se.06mdq48v7_fb.ijwih8iu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 616.800329770155,
                "y": -820.6435536179386,
                "id": "id_h4.st86oqncc_ms.n61mybspm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -653.4396521436755,
                "y": -590.2175884907166,
                "id": "id_i5.ftserwc5a_ge.7tzt3z3x",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 189.17329096068215,
                "y": 988.6924505550705,
                "id": "id_59.68l29q79_rg.oxez14tx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 340.25098576636424,
                "y": 52.51263178106137,
                "id": "id_9g.919zpit4l_1g.igdcjhvx2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 711.4057027817846,
                "y": 868.6017456111833,
                "id": "id_jr.elsgvt1z_o4.lnv1k16th",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1258.753673353654,
                "y": 479.22771163157495,
                "id": "id_yy.r4rdtncj_db.87443lbb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -401.9405833324082,
                "y": 930.3728262771847,
                "id": "id_b5.xuzutbiss_pu.df6kzaklo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -222.02601387748905,
                "y": -712.4269935774441,
                "id": "id_66.0xppbp0bp_js.fddt8syrq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1480.8435391459338,
                "y": 73.4911744317501,
                "id": "id_154.ud85ugld_21.hok8fmxfa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 841.6914596144356,
                "y": 479.48148119509074,
                "id": "id_nd.ow4qmqre_db.hbzziol88",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1013.7974061028758,
                "y": -214.18831498669988,
                "id": "id_s5.spfs1rcwu_5y.6s20v4nhh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 888.4692850509339,
                "y": 21.691835670743444,
                "id": "id_oo.gw6yohf6k_l.owma9fhlsp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -237.59250236817593,
                "y": -696.7189516679189,
                "id": "id_6l.lbvsgh309_jc.pvreq35w",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 299.3049409836826,
                "y": -39.98259339962203,
                "id": "id_8b.az7br6swg_13.zdfvlfrml",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 456.2488847305367,
                "y": 45.09935735698036,
                "id": "id_co.8yjyrx4rm_19.3krm7fmjy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -850.4677047251043,
                "y": 37.84610174750014,
                "id": "id_nm.gu58c82k_11.ugjq16f0hk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1191.0346809235489,
                "y": 577.6061242586636,
                "id": "id_x3.18y2mtrzh_g1.ltjc03ohc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1096.3066805923454,
                "y": 629.0306595748327,
                "id": "id_ug.b1ghmo7m_hh.13qgb8xb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1201.272518452458,
                "y": -936.4168105585562,
                "id": "id_xd.9t6mcpjlm_q0.f06polbn8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 599.9053161629784,
                "y": -52.40186447249778,
                "id": "id_gn.wlafig2ea_1g.egtdzx762",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1079.6635914809658,
                "y": -57.11631005408344,
                "id": "id_tz.nw0iva34_1l.46qk8787ji",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1183.0819404985996,
                "y": -925.8456991448196,
                "id": "id_wv.2y70klyd_pp.ug0xtc0ho",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1136.6283439955828,
                "y": 757.6442242629012,
                "id": "id_vk.mmc0mmil_l1.n6wxdnwm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 278.21079551509615,
                "y": -838.6720505088929,
                "id": "id_7q.7l6viprp_na.o6z6scnok",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 866.3194387272174,
                "y": 100.67816008911996,
                "id": "id_o2.bhzqeaua_2s.oew8jaz5k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -454.64938395432,
                "y": 332.60919308534835,
                "id": "id_cm.ndlnoh1n4_98.lxiigbee",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 797.1525030495688,
                "y": -564.795936336008,
                "id": "id_m5.5hn6k8hk_fo.snj7ekswh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 85.96351055958098,
                "y": -210.72787278592875,
                "id": "id_2d.yopjr2n8e_5u.q7bmrz9j7",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -831.9693886634801,
                "y": 346.3105746864908,
                "id": "id_n3.ywbspjdra_9m.b6i67nk87",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 149.66551971318495,
                "y": -816.1695369303303,
                "id": "id_45.nyihk3x5c_mo.63pwxv8qj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 676.41305548421,
                "y": 348.5493815422021,
                "id": "id_is.evbilltdr_9o.jrzy10sfw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 924.8258347819824,
                "y": 219.97045504637526,
                "id": "id_po.tqa5b9vgb_63.yxpjtmtxx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 688.1227375457047,
                "y": 973.6651893325327,
                "id": "id_j4.4f2fy1gcd_r1.ny32n95i",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 574.2817349786542,
                "y": 392.8930609241838,
                "id": "id_fy.a54mksyu8_aw.w5enf0qgt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1271.960374181505,
                "y": 619.5686740435704,
                "id": "id_zb.ykn7ua90f_h7.kh020szhe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -375.72327440170943,
                "y": -244.91034446072126,
                "id": "id_af.q1d399pzs_6s.wrt14drug",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1123.247939620213,
                "y": -427.1805383447886,
                "id": "id_v7.8xbvcpo9m_bv.6hz73bwmu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1239.4566114770364,
                "y": -611.9564495344321,
                "id": "id_yf.gfrnxxmlj_gz.yfk3xvts",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1194.1316736995336,
                "y": -360.7453100057554,
                "id": "id_x6.4qnd939e_a0.qtx6lzdep",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -772.212013859684,
                "y": 562.3868717671319,
                "id": "id_lg.7mrpvcqwl_fm.dxdw0czmr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -588.1420437766735,
                "y": -817.3377563293816,
                "id": "id_gc.54370002_mp.c5qcxno4e",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 300.2609373163632,
                "y": -161.65114096752916,
                "id": "id_8c.9e6ahp297_4h.nfvmscd3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 185.2453919187501,
                "y": -656.0611146586881,
                "id": "id_55.8u106y4rk_i8.277d5pi3s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 527.1329242056165,
                "y": -757.1662222486193,
                "id": "id_en.4s9pmet9h_l1.5zf9jqn7j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 864.9164558250859,
                "y": -419.4069097792385,
                "id": "id_o0.wzq5v7rrm_bn.encs6bsih",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -594.3466161022495,
                "y": 652.288549120605,
                "id": "id_gi.ch7py8r_i4.adyjpwsuj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 823.1911215407054,
                "y": -689.3417108349506,
                "id": "id_mv.6voyspu4_j5.cauuzhjg9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 342.0975932713375,
                "y": -375.66323313433963,
                "id": "id_9i.3ihb7x5r7_af.nvjszfhan",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -67.60615064608419,
                "y": -878.049583128882,
                "id": "id_1v.ltkkbncmz_oe.1s9cm743m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 975.0766768694255,
                "y": 325.52347708319735,
                "id": "id_r3.2rdfp2y1_91.iufchg068",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 150.21559219578012,
                "y": -432.1099325824216,
                "id": "id_46.7reo3njxh_c0.3yh0ivkdt",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 552.953313207775,
                "y": -470.6851053420178,
                "id": "id_fc.ybhs47cyl_d2.onw9w6sxe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -587.3881036631153,
                "y": 213.6566048139041,
                "id": "id_gb.dyzd4eeml_5x.nmyjy8n05",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 391.05476370198653,
                "y": 22.71022624544196,
                "id": "id_av.1yz1zn4z6_m.pkgbd5n3l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1005.318400197194,
                "y": -32.564801792620074,
                "id": "id_rx.bgna2d14_w.kbze4liled",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -636.1125775021405,
                "y": 71.60612171607863,
                "id": "id_ho.41wez239c_1z.ltj7qd0xo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -436.94454879257296,
                "y": -303.9741724885929,
                "id": "id_c4.y04v9j5v6_8f.z2izp5dwi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 820.5272718626197,
                "y": 724.1469023718073,
                "id": "id_ms.izce98tjb_k4.5advko2ed",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 274.9343788223539,
                "y": -177.3151835044349,
                "id": "id_7m.xmydmbmrn_4x.bch7991w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -125.0924180018128,
                "y": 221.0044083888954,
                "id": "id_3h.3brur5vhe_65.05poef2sq",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1063.5458667744806,
                "y": 532.5954696027586,
                "id": "id_tj.jnfykghy_es.lfq89swr8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -521.4092284574169,
                "y": 686.1117212068568,
                "id": "id_eh.eqcynxhru_j2.40sgq5n4r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 533.0652824896806,
                "y": -901.6126918388419,
                "id": "id_et.2cltiidxd_p1.m21r0k7ab",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -165.70044469395827,
                "y": 6.831371366052167,
                "id": "id_4l.p7ry455io_6.txggnca0zx",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1478.7638061494831,
                "y": -690.8136954306783,
                "id": "id_152.rhw512bmn_j6.tajrv4du9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 711.2542566418854,
                "y": 939.4184207429071,
                "id": "id_jr.95iliuv7c_q3.f29u6a6c9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -95.62198955062183,
                "y": 196.74116144558388,
                "id": "id_2n.me3jlmyxd_5g.qojmmevd4",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -660.983114726645,
                "y": 203.5100772811261,
                "id": "id_ic.ze47838_5n.id25ynjt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1124.4682012932471,
                "y": -228.65220789183832,
                "id": "id_v8.gusedstz_6c.nh9et6cq2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -219.00154465637718,
                "y": -770.8634882340068,
                "id": "id_63.0202fgpta_le.v32wnj4ob",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 216.48078578926015,
                "y": 561.6926309910971,
                "id": "id_60.hb3ji5glv_fl.oxne3esb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 785.4076782891059,
                "y": -24.05332227854774,
                "id": "id_lt.eocmz6hvc_o.1x3sya235m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -861.7249559943182,
                "y": -320.8901930303267,
                "id": "id_nx.q3jjoqt4n_8w.w1ougg1n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1365.9651476358117,
                "y": 955.6880881751288,
                "id": "id_11x.yqtxet9m_qj.orrfwp8b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1230.611718839661,
                "y": -467.67798615123104,
                "id": "id_y6.m0scr0rtd_cz.oeo4dy1vu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -190.14574652232739,
                "y": -917.885515561379,
                "id": "id_5a.58vy6vc32_ph.vvmm3s9gm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -309.53379853502463,
                "y": 660.4038707397594,
                "id": "id_8l.j7swk60vh_ic.ejezr8c3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -316.821938963507,
                "y": -910.4971929850926,
                "id": "id_8s.tl8du115s_pa.hwd1ajj6f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -279.426625832754,
                "y": 894.0204836648008,
                "id": "id_7r.fcwnkotj_ou.0qjoovpqp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -208.64401736373406,
                "y": -3.558108010314413,
                "id": "id_5s.n6n9v9gbv_3.k3b356fkjo",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 497.80175632447504,
                "y": -38.51065246647863,
                "id": "id_dt.sv2qr0w6_12.idt01wv5pm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -763.7805406804184,
                "y": 360.43782253066684,
                "id": "id_l7.s3kwm5nx_a0.frf1q723o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 324.76603811090786,
                "y": -569.0841389097568,
                "id": "id_90.rks9v8iz_ft.311l24j1h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -407.25548630505,
                "y": 241.5596446420775,
                "id": "id_bb.973yvvx7w_6p.k5as3fb7i",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 838.8909451647528,
                "y": 828.723855977159,
                "id": "id_na.w2nxr4z8_n0.q2482wvyk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 498.21931403584904,
                "y": 634.6980652470622,
                "id": "id_du.7w8bd39tw_hm.p4oxk36i",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1197.1215781161313,
                "y": 518.4297446178214,
                "id": "id_x9.4dkcjrn_ee.fgy5xp2br",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -266.3969358853926,
                "y": 415.195044480384,
                "id": "id_7e.eaffv3ui_bj.70rztvmu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1336.697598787895,
                "y": 615.2073339218939,
                "id": "id_114.p436333s_h3.7gpddetym",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 75.32599928694844,
                "y": -528.413387951435,
                "id": "id_23.bqhtm9dlv_eo.evr10mlk",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 1070.2056606975734,
                "y": -476.2056649996325,
                "id": "id_tq.7ejazxor_d8.7eji82c08",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -587.2650357099465,
                "y": -915.8522155584272,
                "id": "id_gb.9jhi7vtjl_pf.uogyvy1r9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 256.04886572664554,
                "y": 948.7832665116173,
                "id": "id_74.1rbvnmlis_qc.s742yqva",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1438.5853115795867,
                "y": -197.89996144934548,
                "id": "id_13y.l2kaozi1_5h.weclne0l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -401.0974067411174,
                "y": 565.8048573698031,
                "id": "id_b5.3i8lx5gzd_fp.sz3fbdl4l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 291.63315485533167,
                "y": 721.4254675022755,
                "id": "id_83.mskh0x1e_k1.fbem0vhu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 922.0318235059103,
                "y": 125.98598809201394,
                "id": "id_pm.158r9pj9m_3h.zhu9di7a6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -860.2359430544917,
                "y": -244.39764130409844,
                "id": "id_nw.8hs5q9bi_6s.ebccp2tpu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -690.9778426801906,
                "y": -840.204635962341,
                "id": "id_j6.z7a87lmj_nc.7d7hu44tu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -291.6970661133058,
                "y": 19.237487132641718,
                "id": "id_83.p3ebeagux_j.8js76rd0v8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1268.0614500585898,
                "y": 655.0427135638643,
                "id": "id_z8.27n0i231g_i7.1jcudvbs7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1254.1382503792256,
                "y": 318.80917937165077,
                "id": "id_yu.4z67jrfz_8u.t4p2mav5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1429.8028381166819,
                "y": 327.2364853838021,
                "id": "id_13p.swh7qv26j_93.8ihgmu6kp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -326.6391499544304,
                "y": 331.7027756871855,
                "id": "id_92.n0c6hmuxq_97.paspae1aa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 28.096535885167896,
                "y": -297.51930120503994,
                "id": "id_s.3h3z7tmg6o_89.ip0im27",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 373.44888880859276,
                "y": 307.7615370641547,
                "id": "id_ad.g5rctpdf5_8j.rey9u5glt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 288.34386376931684,
                "y": 586.2471903806754,
                "id": "id_80.cdnb371ew_ga.8wcwx2a79",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -471.8028617286942,
                "y": 877.0432596754988,
                "id": "id_d3.swibel9si_od.1k2bn5hj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 543.900473391866,
                "y": -822.65103523262,
                "id": "id_f3.wf0hilg9j_mu.nfqp6yhb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -248.18790943739805,
                "y": -31.55729013519658,
                "id": "id_6w.6rj3p43g4_v.k28xfebmkh",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -557.0769564386298,
                "y": 914.3891666187449,
                "id": "id_fh.2rqh9k917_pe.e0cyh9g0b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 658.5706005855723,
                "y": -154.67305394360415,
                "id": "id_ia.kjhxvfl2_4a.o8a067m2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -78.77669830019602,
                "y": 604.2549400545693,
                "id": "id_26.rylmw49n8_gs.96ehe7iwq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -276.52631758837003,
                "y": -163.68009498705715,
                "id": "id_7o.iy3vfxhn_4j.oheif6mm3",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -596.5182684769895,
                "y": -319.94364660305405,
                "id": "id_gk.inoc0y0lb_8v.xyyrxkyd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 615.7117057436333,
                "y": -433.1348585490109,
                "id": "id_h3.pmdccr656_c1.4urykrcfu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -652.1860938802163,
                "y": -373.8850995794238,
                "id": "id_i4.6p6e9baj_ad.vv37ey39n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1416.9518109191863,
                "y": -501.45778754788006,
                "id": "id_13c.y9jouk3h_dx.ghajafv6f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -468.0935157829965,
                "y": 530.5013156060384,
                "id": "id_d0.3d72lskb_eq.i1pdpnzh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1439.0593314589023,
                "y": -312.94907831635794,
                "id": "id_13z.24w62fph_8o.y6074ij1",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -165.19940448469902,
                "y": -946.0504013793462,
                "id": "id_4l.76feyo0fk_qa.1tbiyo9r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 100.52947324917545,
                "y": -4.032126461632288,
                "id": "id_2s.j273qo6ts_4.15mw4a76cp",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 343.2098997927012,
                "y": 447.7856900844138,
                "id": "id_9j.7k131t2yc_cf.sa95mxbln",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -130.6410987460573,
                "y": 271.9214582850916,
                "id": "id_3m.n2v3pm1rw_7j.x67k2ucjc",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -427.0963306376216,
                "y": -776.2028580767901,
                "id": "id_bv.3guehae1s_lk.7awjo69s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 964.7717280824006,
                "y": -687.9439480646181,
                "id": "id_qs.rs5qu1yqe_j3.xzcu9t5u",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 512.9065021915189,
                "y": -531.2190297369486,
                "id": "id_e8.wmtrl21ko_er.7vv1umg5b",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 304.6911771518903,
                "y": 229.5639859320197,
                "id": "id_8g.ovrk7ba5_6d.kaxbsmkml",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -735.145564314317,
                "y": -391.32027739766966,
                "id": "id_kf.58ng5g5nn_av.bj2v1hv83",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -756.5819903908424,
                "y": 720.2354755308788,
                "id": "id_l0.ky9cdei9p_k0.8h6cgw6dq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 139.01337666584163,
                "y": 315.9749516186441,
                "id": "id_3v.0hc3ntx2k_8r.z3jcc5x38",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 747.4426121183833,
                "y": 214.35320557098248,
                "id": "id_kr.fxmie8zv7_5y.cpr5q7w3c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -827.4751843316599,
                "y": 923.2710571112209,
                "id": "id_mz.h3u77fi1j_pn.9rafuzr3o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 937.9162615877553,
                "y": 200.96707204448012,
                "id": "id_q1.wzh3mfdq_5k.ytbpog2al",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -842.1447539192775,
                "y": -447.431848233177,
                "id": "id_ne.57lmzyjst_cf.fjob79t9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -778.7528482538938,
                "y": 523.9635883345413,
                "id": "id_lm.r3ovz0riu_ej.yot6dtszk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 37.76298457372786,
                "y": 410.4564468031358,
                "id": "id_11.rgtt3iqbrm_be.gfjzcqe1",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -417.80540473676547,
                "y": 205.00065866881323,
                "id": "id_bl.szsyokbl_5p.00uqb6myq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -311.03113203731345,
                "y": 248.12108599714338,
                "id": "id_8n.14chv8woa_6w.4cxdz7pve",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -576.1805933907212,
                "y": -311.19396113051505,
                "id": "id_g0.6i1rjqx4s_8n.6zdg7urxd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 977.8814094212466,
                "y": 614.9333380903022,
                "id": "id_r5.vqb1d6yc_h2.xlltl8hhk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1421.793625412718,
                "y": -437.3487370936697,
                "id": "id_13h.skjdxvt_c5.cjyoehep",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -36.845903201692295,
                "y": -335.95788631935045,
                "id": "id_10.ugagjveqw_9b.yhf56ruw4",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -962.207016644874,
                "y": 708.8188059690892,
                "id": "id_qq.7gakgvtib_jo.th67lu4hq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 250.45935787194026,
                "y": -231.9077915511141,
                "id": "id_6y.gjbstxjik_6f.wohx7p8gt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1090.4690636088148,
                "y": 998.3065831780293,
                "id": "id_ua.gvwmqq4mn_rq.b1by0eg6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -788.8358725710078,
                "y": 765.7585221572533,
                "id": "id_lw.u3agxzpt_l9.rb1ly9dg8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -153.28513692858007,
                "y": 254.30132843335946,
                "id": "id_49.a9jcjph2t_72.auis232kk",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 936.5224806293252,
                "y": -681.9879278024032,
                "id": "id_q0.it4utotf_ix.zkcrcdij",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -131.99075718479355,
                "y": 766.5683201343102,
                "id": "id_3n.zo0rmb4gb_la.kgjjl9k5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -40.446625153913374,
                "y": -459.6260139140162,
                "id": "id_14.g2tqr5uo3_cr.mjbazi4cf",
                "nodeType": "system-minor",
                "affiliation": "bree-solfed"
            },
            {
                "x": 92.78627736008775,
                "y": -939.3052635404016,
                "id": "id_2k.sb0k18mvx_q3.azmdiykk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -585.1691891808605,
                "y": -181.37664828396942,
                "id": "id_g9.639ousc8_51.dk4whffgf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 153.2569544487576,
                "y": -17.862942615640236,
                "id": "id_49.990gsx7my_h.v2dg82pgo",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -77.8498842848204,
                "y": 901.9777334147846,
                "id": "id_25.ulg78qua_p1.z754oqmbi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 987.257122996401,
                "y": -16.334707025126022,
                "id": "id_rf.998bwcqtm_g.c1s39w1258",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1128.928077560664,
                "y": 977.9218107310901,
                "id": "id_vc.xesdx4hoo_r5.x6o01wkli",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 845.0735832605208,
                "y": -736.3823945709455,
                "id": "id_nh.2nd3mdq6_kg.drl01fezr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 624.679932206361,
                "y": 360.44363096694406,
                "id": "id_hc.oh6x0ghfa_a0.fyy1o4jo6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -281.79375598868205,
                "y": 754.9407547695791,
                "id": "id_7t.skph9b99h_ky.xv7urgxe8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -761.5222059475703,
                "y": -92.19228013131351,
                "id": "id_l5.iss1gqfb_2k.6x70s9enh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -780.3126343647634,
                "y": -949.8754999086714,
                "id": "id_lo.b969oiudb_qd.vinbnkd5n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -995.0706765698872,
                "y": 735.5055443996741,
                "id": "id_rn.2jlhhwwdo_kf.i76ogn9vm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -558.017202531815,
                "y": 945.078004187216,
                "id": "id_fi.0malnbe0k_q9.2t3d2wv68",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1251.6957520960577,
                "y": 76.76758591333987,
                "id": "id_yr.p1p0coxm_24.rmshkxiqs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 19.825049658940088,
                "y": -502.94020945772866,
                "id": "id_j.tp9ilvwj2r_dy.xuieujq25",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 1249.9766032905045,
                "y": 27.028406561508064,
                "id": "id_yp.z5oeig1sd_r.10tc45bf5n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 65.57072146240375,
                "y": -412.76749478494776,
                "id": "id_1t.kjnkwe4x_bg.rmo8iquh",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -160.2786027398031,
                "y": 33.790970708336545,
                "id": "id_4g.a12hmariw_x.sh3j2277q",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -150.56898336526535,
                "y": 978.2741512769792,
                "id": "id_46.khehkazjr_r6.9vasvd4bp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1260.7965165047272,
                "y": 538.0518123550657,
                "id": "id_z0.soa9v5tm_ey.1v5cuzakm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -458.5603240643834,
                "y": -937.0591681165803,
                "id": "id_cq.k66h9hsa_q1.24ojpr0y",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1126.5330616649376,
                "y": -444.70629947298687,
                "id": "id_va.j6uiwg8ge_cc.pfd3w8q28",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1234.178653334377,
                "y": 611.9541961389091,
                "id": "id_ya.6fj8zyjf_gz.ycmz3o98o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1396.5647443932921,
                "y": 105.13465691864576,
                "id": "id_12s.kbwppvo8o_2x.4uijwxxf2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -309.9766239664117,
                "y": 439.5562295049449,
                "id": "id_8l.z5pd8mzz_c7.k0vfz54je",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -17.411588618441442,
                "y": 393.7700825989548,
                "id": "id_h.etf2tubla_ax.rq0z1ynyt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -183.48308472673125,
                "y": -900.6544304569388,
                "id": "id_53.he2su3xu7_p0.nk53v6sz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 197.14741331997766,
                "y": 952.2627738856402,
                "id": "id_5h.5b1prr0ny_qg.9gjz80mg7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1496.4652918704674,
                "y": 243.99676312037536,
                "id": "id_15k.gr0no4pu_6r.zvsza9lxp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 903.0435782362588,
                "y": -300.6474931021228,
                "id": "id_p3.1kh6pax7_8c.nb5frvds",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -752.6143467343485,
                "y": -981.5575456704853,
                "id": "id_kw.m46ylribr_r9.k2kumn0xa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 535.7159151270323,
                "y": -876.468523572342,
                "id": "id_ev.prtqi2lkg_oc.gv7fos9uk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 405.7027881607603,
                "y": -209.11452507624256,
                "id": "id_b9.pata8majn_5t.44fa5ezs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 192.05349526826922,
                "y": 805.9920653134025,
                "id": "id_5c.1xbvib10b_md.zppsrudf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -143.7194373206437,
                "y": -691.3829827507589,
                "id": "id_3z.pwe2fnfpj_j7.dscfyeuek",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 371.2707118478445,
                "y": 687.6422054455115,
                "id": "id_ab.9quby8j7u_j3.n4aqjhves",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1130.1455962382574,
                "y": 457.07481414765516,
                "id": "id_ve.58oxrrmke_cp.2oyj1f3jv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 162.17554603034068,
                "y": -80.31573013083153,
                "id": "id_4i.6bi9x600o_28.bd6pdnqj7",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -573.0715512119991,
                "y": 159.81883786759136,
                "id": "id_fx.2kqak6ed7_4f.th7p6m7y4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -871.5878430573878,
                "y": 212.90326311612284,
                "id": "id_o7.l5uelrnu_5w.wimn6jxpq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -780.4315386848828,
                "y": 827.2942051960586,
                "id": "id_lo.fj9va2jxa_mz.alafr5xtu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -799.8997803238569,
                "y": 337.71308384563486,
                "id": "id_m7.we45ff92r_9d.po5n1b9jb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -819.8894630033767,
                "y": -184.61041051476548,
                "id": "id_mr.w0qsai9xl_54.lz3b9m907",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -52.77576900961117,
                "y": -648.5197205436241,
                "id": "id_1g.rxea1gxre_i0.ipk2xv0mc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -334.68877321846026,
                "y": 257.80982536593456,
                "id": "id_9a.osneingcl_75.t5j7n3t76",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 286.11487269887857,
                "y": 301.21815741250384,
                "id": "id_7y.44vi0tt2k_8d.7uqcoi07k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 734.1377081884052,
                "y": -954.1630570282731,
                "id": "id_ke.4ygwvk1js_qi.5vbl6ywll",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -700.965644535397,
                "y": -113.37947932646887,
                "id": "id_jg.yrh40fi9a_35.dnszjqqg2",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 261.6753378187857,
                "y": 734.2472502109624,
                "id": "id_79.ob8k7erk_ke.8wfpersmo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -904.9424130404611,
                "y": -386.294936012833,
                "id": "id_p4.xxd80rown_aq.am8j8uzgp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 981.9428186989014,
                "y": 74.6801029374385,
                "id": "id_r9.xxw5ddthk_22.ohevrwvlp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1376.1876488338626,
                "y": 750.927353987508,
                "id": "id_128.6r6xzex8_ku.xdumlf85p",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1008.4595294915252,
                "y": -59.02592300417405,
                "id": "id_s0.gjjt340u_1n.0xlgoxkyf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 185.87346573596483,
                "y": -62.96308173892305,
                "id": "id_55.vg0f0x5dq_1q.yo5jhxets",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -991.8788505111744,
                "y": 617.9563330851693,
                "id": "id_rj.vmzndopj_h5.yfeocn4n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 64.33887406048143,
                "y": 93.6346427492017,
                "id": "id_1s.c76iakzg_2l.muhw464s1",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 261.4933845725402,
                "y": -711.8393944582872,
                "id": "id_79.hrfcmecz4_jr.u7usd1qhn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 420.41182696779447,
                "y": 573.0160444854864,
                "id": "id_bo.etq75wzej_fx.0kskkolhs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 486.7853374229012,
                "y": -285.6249715288475,
                "id": "id_di.s9spatyyj_7x.mhyo6ghxk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -190.9728739494234,
                "y": 759.0646524970186,
                "id": "id_5a.z0ueng9c6_l3.2bsfd9hl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 502.47955322828807,
                "y": 904.2544019385214,
                "id": "id_dy.h9i19wic_p4.95pdke0mn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 968.46593632501,
                "y": -190.64298485450013,
                "id": "id_qw.gruq3tzdg_5a.n5b3ndlah",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 42.50334761636418,
                "y": 545.5598314783012,
                "id": "id_16.i4c6pk63d_f5.k5jhwp3pe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 914.1025597725559,
                "y": -669.0461230124104,
                "id": "id_pe.3ox119a7u_il.1nrwy6p4l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1342.568935986329,
                "y": -718.6873240867806,
                "id": "id_11a.khc9zhct_jy.oqrsj77lt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 165.78004848341357,
                "y": 27.780965830269906,
                "id": "id_4l.s2xxwvx2_r.s44qpccn17",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 452.2333074796072,
                "y": 879.2912733903372,
                "id": "id_ck.8ed6z4grj_of.ahhng316m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -55.35488795725871,
                "y": -538.3177593467315,
                "id": "id_1j.crxnhombdd_ey.bftdol2b",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 796.6690430767567,
                "y": 657.7986113844413,
                "id": "id_m4.o32vgfi9_i9.sr00gizai",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -258.98726079532776,
                "y": -379.64610689953247,
                "id": "id_76.zjhn10am_aj.n9crhi2iq",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1077.1315137436018,
                "y": 772.7605041458951,
                "id": "id_tx.4qfwl60hl_lg.rdm2xj8m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 31.877212158196016,
                "y": 925.4606936260789,
                "id": "id_v.vkv7kqvvn_pp.gl24dvk1",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 719.7919447990944,
                "y": -731.0253642360829,
                "id": "id_jz.sicz5lr7f_kb.0wve6d2ke",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 841.0370300419381,
                "y": -985.3707261227536,
                "id": "id_nd.1bzo916x_rd.dcglizi5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1426.6145438312715,
                "y": -869.2357753171148,
                "id": "id_13m.m4g5ngly_o5.8hkbztk6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 898.4214981185155,
                "y": -434.00960637309674,
                "id": "id_oy.f69ezf1i_c2.0cg70n9q",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -505.56226923021666,
                "y": -177.9448800585368,
                "id": "id_e1.k8p8e8etv_4x.y0kbnx27r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -862.4684410738056,
                "y": 809.0754753345393,
                "id": "id_ny.gv3l4ex0a_mh.2ptdkv11e",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -765.9334558688715,
                "y": 696.1937336190056,
                "id": "id_l9.xlrbeusmg_jc.6z2u33qo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -735.2821124512934,
                "y": -143.1878361183916,
                "id": "id_kf.a5m8l4qok_3z.6rfojsksm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -949.9578917651498,
                "y": 692.9027289258229,
                "id": "id_qd.yhfec26eq_j8.whxpy3xe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1082.0474724909386,
                "y": 135.23164093900732,
                "id": "id_u2.1pivjzpyk_3r.8c7ftsbq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 507.52673079078136,
                "y": -149.00898472003826,
                "id": "id_e3.iyn5gp77f_45.0bn6vnvfn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1197.1148512232076,
                "y": -956.3637883226903,
                "id": "id_x9.44uhy9y2_qk.d3gwoqvig",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1391.250452149401,
                "y": -97.01239795849892,
                "id": "id_12n.90l3fqtv_2p.0g2ft529j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -104.69780377525626,
                "y": 311.38183901908246,
                "id": "id_2w.p4cqdvyzn_8n.dqv2xbxmt",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -108.8933785374926,
                "y": 745.743307810546,
                "id": "id_30.w5tgvvrwx_kp.qrbrow7gn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 283.8471020057275,
                "y": 607.825415030153,
                "id": "id_7v.uhue2yuvo_gv.tpqkahi7l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -230.2061451879125,
                "y": 674.0556860867787,
                "id": "id_6e.7f5wr7p6d_iq.20638q26s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1214.0933505475764,
                "y": 97.59419459341461,
                "id": "id_xq.3czd2n0q_2p.le2qqv3ar",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1101.4454145404516,
                "y": 876.163880733099,
                "id": "id_ul.g199dzup_oc.5we0p90qm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -639.7530986463387,
                "y": -513.8554768778517,
                "id": "id_hr.r40kjam5s_e9.usp4ngkb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -170.0484438891267,
                "y": -541.2196363461051,
                "id": "id_4q.1qs74q4z_f1.7wncpyjmf",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 11.604757847485757,
                "y": 554.3563687132664,
                "id": "id_b.lrrkyfypu_fe.ctuqlc539",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -348.47835005332695,
                "y": -208.6715986646874,
                "id": "id_9o.h7xweii8r_5s.o6e3v267u",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 416.45870050777717,
                "y": -226.63364677118375,
                "id": "id_bk.gih4pmud9_6a.mt7f96ry",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 151.01561668496993,
                "y": -699.041081922164,
                "id": "id_47.0k8m17zma_jf.1h8puqhub",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1450.46158520249,
                "y": -735.7530615043579,
                "id": "id_14a.gm7pw3c7e_kf.r3yu5glvt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 11.932115802278759,
                "y": -164.3013537762688,
                "id": "id_b.xk0sm5i8wj_4k.aujymh2h7",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1480.859741832056,
                "y": -123.9798322087014,
                "id": "id_154.uy844xjfj_3f.z9v1us58",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -514.8418104272221,
                "y": 893.2942634859712,
                "id": "id_ea.uazi9g8k_ot.ald5nqe4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1332.124762717589,
                "y": 488.22585018237464,
                "id": "id_110.4hoxgfu7d_dk.84p9kvkpv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 929.3202707137568,
                "y": 687.6551247732846,
                "id": "id_pt.bj2jtcfze_j3.nl1i1ud1",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 362.3391348393043,
                "y": -600.4983478668851,
                "id": "id_a2.c7ioavpwt_go.hxux1tth",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1234.3472722353226,
                "y": 943.2518922944539,
                "id": "id_ya.ci2c03mt_q7.92gabt53r",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 766.3243965128361,
                "y": 692.3063855480739,
                "id": "id_la.bof1kn02_j8.b12q2h1wk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -703.825281365534,
                "y": 30.609672081764984,
                "id": "id_jj.tpkbsaq2t_u.ly4uzec6ir",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 50.022829126495026,
                "y": -905.0436278002892,
                "id": "id_1e.0tl45zatom_p5.1kjhy910c",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 899.4607463684104,
                "y": 173.942171871734,
                "id": "id_oz.gl4kz04qu_4t.xx1yy7v74",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -70.13295688884727,
                "y": -378.93902692717063,
                "id": "id_1y.4sb8in3bl_ai.xsz8ng3d",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 462.12593413018726,
                "y": 608.4165788737637,
                "id": "id_cu.4j7kza3a5_gw.ezvwjhyjl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 855.4970323420316,
                "y": 648.5697337349375,
                "id": "id_nr.hw5jh2jzg_i0.kidhwafo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 517.3858292360942,
                "y": 672.3598525087696,
                "id": "id_ed.dw18yhubj_io.cyda14nkq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 883.8937027519726,
                "y": -587.4101515427874,
                "id": "id_oj.w68lfw4mi_gb.erk13df8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1242.0284358102213,
                "y": 378.96213108406505,
                "id": "id_yi.10up8pee_ai.ymx6rgpjb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 723.3756020368451,
                "y": -830.1130525894039,
                "id": "id_k3.dis36v64a_n2.42ikxrniu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 699.8469967424523,
                "y": -277.49063834992955,
                "id": "id_jf.uhpha3mba_7p.hnv80tho5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 810.9447638379522,
                "y": 383.36237156746256,
                "id": "id_mi.y0ewgi596_an.d1mt2z4d",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 694.2470207845768,
                "y": 236.90331190836355,
                "id": "id_ja.8w5028hp_6k.wiox4u0ve",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -130.68639793033378,
                "y": -543.6816241178581,
                "id": "id_3m.opkky27tx_f3.ojdurvjmc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 550.0107382309275,
                "y": 316.62679867921383,
                "id": "id_fa.0dx03rei_8s.mkbx3952h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 859.8453797176928,
                "y": 849.0786499862916,
                "id": "id_nv.ufm1asopl_nl.2txhrwvwf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -661.8597390071182,
                "y": 4.7577159320794635,
                "id": "id_id.uy7ze49je_4.r9zzswnmmr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 327.7405940539038,
                "y": 348.4999350827716,
                "id": "id_93.qnt5meon_9o.hzwyypbnq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 873.0299414984524,
                "y": 680.9207838946127,
                "id": "id_o9.12sy7wy0a_iw.x5c3d12dq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 568.9247198153112,
                "y": 490.9891573206887,
                "id": "id_fs.xafq73pv7_dm.zly4gn77l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -749.3788508598361,
                "y": -314.94881131658656,
                "id": "id_kt.dmznyro4_8q.y5nqo254p",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -95.03159732962195,
                "y": 694.3199223443619,
                "id": "id_2n.14y7dozhm_ja.bimaos3k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 848.0901608768409,
                "y": 204.43668687159243,
                "id": "id_nk.38ujng3so_5o.fpy298g1d",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 432.461354103915,
                "y": -163.81850511929576,
                "id": "id_c0.glwxqg1k6_4j.tgs6allwr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1323.665940608018,
                "y": -342.77657893161927,
                "id": "id_10r.nz24i0cx_9i.ryg2ecuwq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -733.1769360033577,
                "y": -365.7340720420525,
                "id": "id_kd.6db4jipm_a5.qfcv5ahos",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 601.9403730250576,
                "y": -795.620934051236,
                "id": "id_gp.xuq1ku72g_m3.mcqarmjuk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -284.40631437089496,
                "y": 425.0418888700599,
                "id": "id_7w.eml049fdj_bt.1iad7sf64",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -970.2578827655519,
                "y": 534.4403842636661,
                "id": "id_qy.9a7s0ot8p_eu.fuqkge78a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 204.63393189090834,
                "y": 630.8201398228839,
                "id": "id_5o.mtkq5actu_hi.tiwfyvi5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -255.92216682304684,
                "y": 662.5014024454829,
                "id": "id_73.x74m5f94o_ie.i1tfkijyf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -482.8216218929334,
                "y": 395.3736598003768,
                "id": "id_de.tktl9zep8_az.dg9gz94t",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -719.8013648477078,
                "y": -512.6989926609209,
                "id": "id_jz.sukh7x6jc_e8.p5w799ab",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -901.55781505409,
                "y": 376.33908202588395,
                "id": "id_p1.k2xf38hxj_ag.c7g7lgedh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 203.1876307989703,
                "y": 152.48855260116534,
                "id": "id_5n.6r63owvz_48.hl5wrkf8y",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 217.55676823156682,
                "y": -981.3597376505387,
                "id": "id_61.k1kktvpxx_r9.cy7x43abp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -846.4270105312323,
                "y": -341.02789172113467,
                "id": "id_ni.fdelpxo7k_9h.105bdpvx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -525.6696880709524,
                "y": -249.1173699103797,
                "id": "id_el.o3wysrh8t_6x.4840dnoxe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -12.848919282189286,
                "y": 533.5645574633481,
                "id": "id_c.uk76eq5qmo_et.kbnzqxvfo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1483.4979687215691,
                "y": -293.39042262818316,
                "id": "id_157.hxd88czq_85.e1zk3clqj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 176.5667380310024,
                "y": -557.2242488701376,
                "id": "id_4w.kehq9j0wy_fh.82mjzndt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -11.800245029106804,
                "y": 649.6230501035097,
                "id": "id_b.st48crtxmd_i1.mfh0x7rgt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -534.2264770878533,
                "y": 757.777002092671,
                "id": "id_eu.85iijgcim_l1.ryzt5ad",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1191.4703202826895,
                "y": 477.7089932006704,
                "id": "id_x3.gxj9gzmd_d9.piusbnka9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1112.4835371885565,
                "y": 91.99665365425062,
                "id": "id_uw.henwsquk_2j.zvnvf9oko",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 195.12592670782783,
                "y": -698.2314968221187,
                "id": "id_5f.4j78ih8af_je.8c0prl87s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -116.38527325245468,
                "y": 548.0691743874879,
                "id": "id_38.dvbb4ah5p_f8.2hneeoscd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -353.78793808896273,
                "y": 361.7396748379708,
                "id": "id_9t.sd61f5wyq_a1.qmm9oxoff",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 469.8328018303109,
                "y": -195.95852666867097,
                "id": "id_d1.tzb7a1lxn_5f.yi90q8y4h",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 620.6870479672868,
                "y": -945.6353728509126,
                "id": "id_h8.oqewrb6af_q9.mvfyemn27",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -716.3552813617598,
                "y": 306.5857260981834,
                "id": "id_jw.csg09cl7_8i.l33mxc9cp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 667.616261518426,
                "y": 207.67748266333774,
                "id": "id_ij.m6oapfnze_5r.oe0mpyhzs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 77.18657522822059,
                "y": 403.3363174512808,
                "id": "id_25.6psuql4iz_b7.c3v8678io",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 34.478158704197995,
                "y": -675.8556485170013,
                "id": "id_y.h7oz0d3pa_ir.usx4xtmsh",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -448.94478540841794,
                "y": -489.399596774871,
                "id": "id_cg.y0fwoscrq_dl.edvl4x28",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 95.71994401148459,
                "y": 733.7126550362107,
                "id": "id_2n.px1phb3ws_kd.pnlmsuhgb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -912.5648602161515,
                "y": -651.9484579808093,
                "id": "id_pc.kc2498tsp_i3.y579772as",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -347.0774886232588,
                "y": 236.97017134040084,
                "id": "id_9n.2sfb4qcmg_6k.yxcbb0oeo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 291.77312458327924,
                "y": 883.7377829926775,
                "id": "id_83.rtywf4eqv_oj.qk604a9f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -164.40602300103376,
                "y": -41.59930522194384,
                "id": "id_4k.em7eq8nrd_15.lkp6n0zzvi",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 634.251634117117,
                "y": -314.4103193581684,
                "id": "id_hm.9248ot9wm_8q.erruyiz9w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -755.6948922386239,
                "y": -234.25574900863967,
                "id": "id_kz.p0kw4egk_6i.97g84kgff",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1376.0880626293178,
                "y": 846.103546213373,
                "id": "id_128.364nefyl_ni.3q71vk8a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1092.0270043806208,
                "y": -547.0254388086122,
                "id": "id_uc.0yzwzmqa_f7.0wyvfh8hq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -17.825858530745222,
                "y": -710.4944061479262,
                "id": "id_h.tqb979reeh_jq.hsr0h5m5n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -989.2097859307444,
                "y": -319.96337857436254,
                "id": "id_rh.7jvrt0dvu_8v.yoje2fjx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1331.6227561171695,
                "y": -378.06464142828315,
                "id": "id_10z.mf3b4zho_ai.2brwrz9dq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -577.0333589915924,
                "y": 732.2923479939889,
                "id": "id_g1.178eann8_kc.aivsd9a3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 86.56603111637105,
                "y": 536.0258728189219,
                "id": "id_2e.kdkqx3qqr_ew.0xj4ef7mh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 297.9418588986807,
                "y": 262.56963790904433,
                "id": "id_89.xwnd9xnhs_7a.ki90y2bnh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 683.0803560686663,
                "y": 577.6276031270636,
                "id": "id_iz.2w53c6v2t_g1.mldg950dh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1147.13953251037,
                "y": -397.41054263178376,
                "id": "id_vv.50u11bvd_b1.es29z11i8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 34.25621879273626,
                "y": -894.4465729470407,
                "id": "id_y.98256m6gp_ou.g2rb2euqh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 252.1093762090684,
                "y": -945.7713260590532,
                "id": "id_70.3xr213vmt_q9.rrmzl8n6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 776.2342690779649,
                "y": -544.4329890806081,
                "id": "id_lk.8fm23as9b_f4.fl5jdycjq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1195.4949006760044,
                "y": 14.468993394558538,
                "id": "id_x7.hte33dlml_e.gvtct4z4ig",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 17.974029774372752,
                "y": -453.7635631389056,
                "id": "id_h.z2cbzrlc3r_cl.rhksv56uv",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -553.0086754886113,
                "y": 710.3339906407502,
                "id": "id_fd.0b8rhmd5c_jq.c0uo0v6a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -486.0971675804029,
                "y": -916.0132662364888,
                "id": "id_di.3hxg80ni8_pg.0h6y6l956",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 106.40326407565885,
                "y": -512.6673524083856,
                "id": "id_2y.eimoskmya_e8.o0vzs6gl",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -241.17821946132233,
                "y": 606.0286661913374,
                "id": "id_6p.6ez09bc5w_gu.115g6yxz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 746.9647234241825,
                "y": -529.4568952512489,
                "id": "id_kq.yqa4wcvw_ep.gg4wkobjq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 434.4272346147802,
                "y": 132.18933176410496,
                "id": "id_c2.fdp23es4m_3o.6tdgnrqwn",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 927.5983741728958,
                "y": 500.605039258744,
                "id": "id_pr.ljhqu1vm_dw.ls4pmb0qj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -372.3320155324635,
                "y": 728.7996682541316,
                "id": "id_ac.byailmce4_k8.ssdble94n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 933.9324103387446,
                "y": 717.4727326183486,
                "id": "id_px.xkejbna6t_jx.h0nt9p9ss",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 112.15156996268388,
                "y": 700.1694325998176,
                "id": "id_34.5gfnc1fs8_jg.63l1pefbf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1030.183279325321,
                "y": -48.56247591422664,
                "id": "id_sm.6lj2vxwv_1c.k8yvjmii5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1033.3411386896416,
                "y": -367.37133220581825,
                "id": "id_sp.ca4601qkl_a7.dd8viievd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -14.633330327171393,
                "y": 324.54934491393306,
                "id": "id_e.mssnr11fkf_90.jry8i90r4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -209.2550946625928,
                "y": -340.0464830516805,
                "id": "id_5t.96lp2rjfp_9g.1o8podtkq",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 881.5522264066985,
                "y": 641.2739078564532,
                "id": "id_oh.jvoob3ko_ht.9uzg0nma6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 884.6100036416153,
                "y": -150.42150177627263,
                "id": "id_ok.lykbvjyp8_46.f69l4l6l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -840.537090706361,
                "y": -811.1909881695394,
                "id": "id_nc.jc2i56fpn_mj.6viqs9u6k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -893.6367004598663,
                "y": 419.0684924056552,
                "id": "id_ot.mx5wa2cyr_bn.2grkxus3e",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -555.0496657230988,
                "y": 647.7864485894559,
                "id": "id_ff.1sd7ccqv_hz.sb8jmtp6q",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1388.6650939113379,
                "y": 143.07587234217908,
                "id": "id_12k.nxymdhzc_3z.2qbwee8vb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -721.9874025950264,
                "y": -897.5642889436766,
                "id": "id_k1.zjo973dgt_ox.kbbgqkzu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1384.490333411149,
                "y": -735.9894894910908,
                "id": "id_12g.hngzuc51f_kf.zmdmdpv4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -130.01304556144862,
                "y": -334.6647628685914,
                "id": "id_3m.0gwnj7q3_9a.nxj6clz85",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 596.1714639578995,
                "y": -849.279905605131,
                "id": "id_gk.667tlute_nl.a2r9xkzvn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 32.03262387131667,
                "y": -225.18465501415892,
                "id": "id_w.16a3kqtb1_69.6nb9il2p6",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -464.1967905091095,
                "y": -600.344562120335,
                "id": "id_cw.731ghk4e6_go.cejw1t77",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -106.08787269909624,
                "y": 529.9288439353998,
                "id": "id_2y.35vse37jb_ep.xfs54vh8o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 237.5566071041926,
                "y": 183.43524084742126,
                "id": "id_6l.k1d274hy6_53.fo2lhokln",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -395.3329835060207,
                "y": -228.8601918668695,
                "id": "id_az.bzjofa32f_6c.uyt40tdeo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1169.382126864657,
                "y": -109.7481722167197,
                "id": "id_wh.dr8ie93h_31.qxmq0xn39",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -92.04663337766783,
                "y": -456.6427687892341,
                "id": "id_2k.1ofq60rwv_co.n510qqjbs",
                "nodeType": "system-minor",
                "affiliation": "bree-solfed"
            },
            {
                "x": 827.3263080278718,
                "y": 93.39701142346394,
                "id": "id_mz.bqw86n5zp_2l.eaiyqlsbc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 223.932595160544,
                "y": 79.34796487347376,
                "id": "id_67.xkn5r4407_27.ciynda4ji",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 620.1899416981175,
                "y": 857.9339404261086,
                "id": "id_h8.6u5x45bye_nt.xmdxa6fgp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 145.05620511767165,
                "y": -335.5311072801212,
                "id": "id_41.20ub0jc98_9b.j4bca9w",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 940.6664079943591,
                "y": 244.58910243557102,
                "id": "id_q4.nznxj2oug_6s.l7h5vjufv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -800.3410390536494,
                "y": -273.72030188512485,
                "id": "id_m8.c9zinfvbs_7l.pxiekk4l",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1058.0800182880366,
                "y": -796.5956737732736,
                "id": "id_te.2vpbzvye_m4.lfzr77ohs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1014.0108542273133,
                "y": 655.9624744252092,
                "id": "id_s6.0e2exmabc_i7.ynd7fznal",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1402.4447563359,
                "y": -966.0923167713613,
                "id": "id_12y.g0ejuvt7_qu.3bn4q57rr",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1264.8822412033733,
                "y": 891.2699432792999,
                "id": "id_z4.vrdufvle_or.9puh1u3o6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -309.57456667454994,
                "y": -794.6108142628026,
                "id": "id_8l.komzdo0iw_m2.lzm5epufu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1446.1664707894356,
                "y": -225.0591488271541,
                "id": "id_146.5zqv01wj_69.24nnbe56u",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 342.3478792225085,
                "y": -351.8169590305531,
                "id": "id_9i.ciuniam8s_9r.tes1gixz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -264.46659394717597,
                "y": -782.5574852063744,
                "id": "id_7c.gspenqap4_lq.k2i12ltf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -914.0597453460244,
                "y": 515.7431675795983,
                "id": "id_pe.25fh8lvu_eb.qr585nyh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1494.0032391789869,
                "y": -996.7452911235478,
                "id": "id_15i.0474krlo_ro.qtwaw8wzl",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 368.070676831853,
                "y": 600.0397807942477,
                "id": "id_a8.2jlhxr544_go.1fk0gi8an",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -201.01193590251944,
                "y": -214.3242419126667,
                "id": "id_5l.0fgvqdro_5y.bo7twk30j",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -552.6471448148814,
                "y": -770.337503186457,
                "id": "id_fc.nap6s9v8l_le.c5ejr2mfp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -417.28382021628283,
                "y": -322.2662355330615,
                "id": "id_bl.a7twz5ejt_8y.9l1hgll0m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -537.9924001690081,
                "y": -627.7243286959301,
                "id": "id_ex.zq5f7a51p_hf.q2qa2erb6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 346.99490808487485,
                "y": 829.3085159791533,
                "id": "id_9m.ztefjd3kj_n1.b3u4dhsm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1145.0712443746306,
                "y": 460.34110656689495,
                "id": "id_vt.2kbz6w8h_cs.ca2o1pidn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 477.0117665880689,
                "y": 26.776198646031617,
                "id": "id_d9.0f8zcl2a4_q.rxybnxwpq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -529.3497615681244,
                "y": -476.1324074826092,
                "id": "id_ep.clah4jaz8_d8.4rllq5aq5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -82.66913569382109,
                "y": 782.0336205680617,
                "id": "id_2a.o3770mp34_lq.17kln6ol",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -733.3131326297506,
                "y": 907.004128495565,
                "id": "id_kd.b9tikp9l7_p7.05cmac7xh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 73.23602155684034,
                "y": -126.9333453442116,
                "id": "id_21.8hvtkzufh_3i.xlm5ruo1a",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 149.5070061356755,
                "y": -546.594827915607,
                "id": "id_45.i92vm8dr6_f6.lewahfni8",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 501.21319036223827,
                "y": 660.9659228166561,
                "id": "id_dx.7oalxyq4i_ic.yru3f18i9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1009.9474500709487,
                "y": 889.5947715105913,
                "id": "id_s1.y3w8aqol6_op.letnqu7lm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 545.715222929645,
                "y": -922.1133232285057,
                "id": "id_f5.pqxfvjjxd_pm.42v7ia2ib",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -974.8374275254387,
                "y": 591.0591490554937,
                "id": "id_r2.u5b0o51ze_gf.24nnp76tu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 894.2237002367801,
                "y": 259.150903191736,
                "id": "id_ou.81wyhvzcp_77.5fkjey7t6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 778.2510052130347,
                "y": 460.9799539731498,
                "id": "id_lm.91awddz77_cs.za0qdeufs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 327.9277547475099,
                "y": -209.92221700512027,
                "id": "id_93.xedbpuiph_5t.x76yfqpd7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 26.187999882617305,
                "y": 299.6863521756627,
                "id": "id_q.6rnblzng8t_8b.opig3g9a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -452.05391462628825,
                "y": 431.25371024896344,
                "id": "id_ck.1xvfva5mk_bz.94t3skelw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 507.5564634058153,
                "y": 404.32348723760197,
                "id": "id_e3.k16cu8eq8_b8.bn8mc8qeh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 224.42278916300006,
                "y": -255.00440368931174,
                "id": "id_68.f7xnfxvci_73.05pgi93uq",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -481.28697564088634,
                "y": -888.4202502310958,
                "id": "id_dd.abx4vlxz_oo.f4n70fqz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 898.7219613045486,
                "y": 960.3285085100254,
                "id": "id_oy.pzntrb0m_qo.btqw5duk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -621.3563924350203,
                "y": -788.813882384904,
                "id": "id_h9.ctvufp8i7_lw.tashvj1gk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1102.1958935949046,
                "y": -16.95020345827686,
                "id": "id_um.71vm0l4go_g.y7goxjkzt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1190.6615174062595,
                "y": 81.44619308190386,
                "id": "id_x2.ntbr7wwh_29.g29l1f4tb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1133.6576541362278,
                "y": -759.1499772349702,
                "id": "id_vh.nobieqxs_l3.5edc5vvv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -411.786803305377,
                "y": -645.6642004578304,
                "id": "id_bf.sbp3f51u9_hx.nwsxps62",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 315.969703282826,
                "y": 454.0362521300235,
                "id": "id_8r.ywqh5d7t_cm.1azdno9zq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 353.2387352406895,
                "y": 774.2595258950548,
                "id": "id_9t.8lefj2ww_li.9ccfug38k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -448.26384777168187,
                "y": -215.9059650989867,
                "id": "id_cg.9hy2xssfx_5z.wm4ph4i8s",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 859.2878830096292,
                "y": -861.5777980937751,
                "id": "id_nv.ad3gwq71b_nx.kstqx8ay",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 645.0002878316939,
                "y": 976.7079993688958,
                "id": "id_hx.00dfg2y39_r4.phkf2g40j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 225.49389494356683,
                "y": -828.9357222511483,
                "id": "id_69.hs35ukzut_n0.xop22bp9e",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -591.7015375969827,
                "y": -223.88799949966608,
                "id": "id_gf.p96xrt5gr_67.vyui618zy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -99.05580006358355,
                "y": -952.854341715173,
                "id": "id_2r.20beogr88_qg.ur860ihvd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -911.1906915794917,
                "y": 636.0064435357242,
                "id": "id_pb.6v4wmlv0k_ho.08cmnyqul",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -699.2420399646189,
                "y": -701.8748259751586,
                "id": "id_jf.8pom73l6r_jh.vhrvpdsru",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -312.61256508304996,
                "y": 718.6829407818393,
                "id": "id_8o.m1vu44flu_jy.ol3a9ifwm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -184.16893333207247,
                "y": -973.2855454915663,
                "id": "id_54.62xr4l7t7_r1.aa2ery5z",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 763.8512490385733,
                "y": 303.42428014986217,
                "id": "id_l7.un7vi6pbl_8f.f9v7q7qh3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -326.4537040510543,
                "y": -644.1402885730922,
                "id": "id_92.gc00l03u5_hw.51taxjulc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -138.39751702646424,
                "y": 991.0024511035847,
                "id": "id_3u.eb6jyhgsq_rj.036cwuzj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 621.2198148437944,
                "y": -183.010533185251,
                "id": "id_h9.7wvoj15ue_53.0dnfpflgp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 55.866568754334594,
                "y": 943.2875626112577,
                "id": "id_1j.v72mqtd54l_q7.acoirgoh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -427.4732233863584,
                "y": 826.241767611782,
                "id": "id_bv.h1apkkenn_my.8pbwqyqsc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -263.24815033701896,
                "y": 433.9318423651473,
                "id": "id_7b.8xlp9yamq_c1.xjo1cge0a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 924.0838964304846,
                "y": 168.59362190690513,
                "id": "id_po.30q9sbxke_4o.ldc0up7p",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 410.66096825519185,
                "y": -850.4738595639951,
                "id": "id_be.nsm4uuk3m_nm.h24e3sndf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -614.2465937735849,
                "y": -197.95863140200834,
                "id": "id_h2.8vl2uii9b_5h.yidwn2mk6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -665.0646959960507,
                "y": -447.1516589148323,
                "id": "id_ih.2bugfhev9_cf.5gjsqmwjf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 716.4053899484877,
                "y": -349.8595410836134,
                "id": "id_jw.eldvfz25r_9p.uxyqyfvj9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -73.94241293698337,
                "y": 745.0878198607347,
                "id": "id_21.xxd7uifyi_kp.35tbn5li",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -627.1468237438756,
                "y": -326.6168392728872,
                "id": "id_hf.5aa7ic69d_92.m7f941de",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 229.95761034273505,
                "y": 587.2503896921751,
                "id": "id_6d.yh29niu47_gb.90i6j71k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1207.512060219255,
                "y": 878.5156843540688,
                "id": "id_xj.ifmojc8qn_oe.ikbrowvzf",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1434.6980210226438,
                "y": 525.6835915299027,
                "id": "id_13u.p4mva08x_el.olxn9rbxn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 306.11471791159056,
                "y": -596.5770582337577,
                "id": "id_8i.44oa1fkms_gk.krv88q35",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -3.4047055113275064,
                "y": 731.4277339037342,
                "id": "id_3.ekhxuoc82p_kb.feccpi5nc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 490.12480282491856,
                "y": -429.0974027439569,
                "id": "id_dm.4hqstkrk9_bx.3i8f7giu5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -12.222079747866928,
                "y": -811.1197463277464,
                "id": "id_c.7ztcp4c8q_mj.4b6vuj1et",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 229.1481207202287,
                "y": 527.884315778572,
                "id": "id_6d.5bypxje0o_en.vu2mxi8p9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1430.1121460821378,
                "y": 783.851116035268,
                "id": "id_13q.41cacqnd_lr.un1o3zgh6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -634.4079131435456,
                "y": 39.399086738112146,
                "id": "id_hm.eonlfxhq_13.ed7sgy1yh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 709.401360416058,
                "y": -211.40607643684723,
                "id": "id_jp.eg5vdk1lt_5v.em9whasm5",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -744.3839043560149,
                "y": 772.073967541322,
                "id": "id_ko.dtjfwcvx6_lg.2nv12ddxk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1095.0437133055166,
                "y": 839.1167812049805,
                "id": "id_uf.1knhkfaoh_nb.47cjkw6f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 922.4151890129599,
                "y": -339.7721096968196,
                "id": "id_pm.ey323xig_9f.rsnjsthom",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1317.1569373426905,
                "y": -549.4958158270179,
                "id": "id_10l.5ne2gzfe_f9.huks725tk",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 766.1393808833247,
                "y": -359.591040261948,
                "id": "id_la.50myd0spf_9z.l9zkoi2n",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1449.2675437648927,
                "y": -913.349240894755,
                "id": "id_149.9mqisdix_pd.ckm6lepm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 617.3858431647975,
                "y": 269.87339184760503,
                "id": "id_h5.dw1wcplif_7h.vfwyx69tv",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 10.383181726123325,
                "y": 861.8472029220413,
                "id": "id_a.dslq5owils_nx.uhz3kzpgh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 431.6392267858196,
                "y": -457.7762543368307,
                "id": "id_bz.n0frjc2iv_cp.ry0x7cnmp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -981.7061911658911,
                "y": -531.5185791731456,
                "id": "id_r9.pf81zbr1e_er.io2tvjx59",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 270.04615048404935,
                "y": 362.9145841475388,
                "id": "id_7i.1nt73ah5i_a2.wxau615bw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -758.7474566040711,
                "y": 542.2247533004415,
                "id": "id_l2.qwpc2ko2d_f2.83a38mcx",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 579.5399206992518,
                "y": 224.98010851713934,
                "id": "id_g3.jfqjg0yzp_68.za7xy3gzt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1451.5762255399327,
                "y": 725.1548125325487,
                "id": "id_14b.kqsdmwvl_k5.5kmxlu8ri",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -549.9271040298838,
                "y": 978.7650253271929,
                "id": "id_f9.xdiyrfvvn_r6.rjh0s2tqp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1312.9778705307917,
                "y": 801.0299021208675,
                "id": "id_10g.z7bizmbm_m9.12r42wihb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 727.2495415078738,
                "y": -7.8043552693150104,
                "id": "id_k7.8zelwqfsa_7.syfzza430k",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1475.9162058320194,
                "y": 261.2736560177925,
                "id": "id_14z.wzehz3a3_79.9unp0xo5f",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1201.2185277637823,
                "y": 600.5116820279577,
                "id": "id_xd.7v7mq84ke_go.if51bk3uo",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -12.90914897845687,
                "y": -642.5405702939249,
                "id": "id_c.wq99653i6c_hu.jgkuij6k",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -82.25563685391865,
                "y": 554.2959485036115,
                "id": "id_2a.97azr01gs_fe.anjrub0z6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 938.9880792189779,
                "y": -227.0585572623944,
                "id": "id_q2.zkjtnyfu_6b.23w1pqfad",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -493.3207059475061,
                "y": -190.59772175519595,
                "id": "id_dp.bjmuu9kxj_5a.linb0ujxa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 907.4972243651139,
                "y": -571.612222016026,
                "id": "id_p7.hwehzz0ba_fv.m1ftw671i",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 689.0121547590986,
                "y": -403.7981420369334,
                "id": "id_j5.0fr3bswk_b7.sqe44vm6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 26.241641603041217,
                "y": 322.1770641214773,
                "id": "id_q.8p613p554j_8y.6dh3qbyyn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 39.73676721191623,
                "y": 469.99776310089237,
                "id": "id_13.qiulzwn5m_d1.zx3mv9j9i",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -401.6072397511957,
                "y": -43.776755178805956,
                "id": "id_b5.luzdlo4bd_17.ryoafcmd9",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 632.9958663625348,
                "y": 486.6722552930644,
                "id": "id_hk.zun52qzd_di.o78qqv83o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 620.0011256634539,
                "y": -373.55304603152194,
                "id": "id_h8.01giokbm7_ad.jwqwyoets",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 357.7605769599254,
                "y": 538.679629406269,
                "id": "id_9x.rdph8bj8b_ey.ogssfalc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -538.158363787556,
                "y": 52.12269450595295,
                "id": "id_ey.5p8mcnewk_1g.4f0fnla6a",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1096.6549209869745,
                "y": 517.58946697031,
                "id": "id_ug.nkrzrnx6n_ed.l7y65kmjn",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1075.546309915418,
                "y": 966.5024108225873,
                "id": "id_tv.jo0mvhv3e_qu.i34h980u6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -428.71627717689955,
                "y": -598.8607531712238,
                "id": "id_bw.psamlucs_gm.uzjasqrxm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -187.77097709934992,
                "y": -656.19390042602,
                "id": "id_57.rr6pgzbpr_i8.6zam9aax",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 1338.7278806406284,
                "y": -308.5714317955275,
                "id": "id_116.q7bzyx8i_8k.kkkpziqe",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 557.7574671790007,
                "y": 239.8597545751686,
                "id": "id_fh.r9odzrcjr_6n.uy8pjgiss",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -586.7892594832155,
                "y": 551.7076128077706,
                "id": "id_ga.sevoutl0r_fb.ph2dskoke",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -961.0659675698937,
                "y": -538.2199301638702,
                "id": "id_qp.2dhs6ow6_ey.7x127zv6q",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1402.7871514259714,
                "y": -816.5016524263056,
                "id": "id_12y.sc5c4nt8_mo.i253fwe6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1269.0788018268381,
                "y": -286.3465207671361,
                "id": "id_z9.2u4kt4pen_7y.ch39toyiw",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 63.17277981481061,
                "y": 311.1452016348726,
                "id": "id_1r.67x7qowamj_8n.586izly5w",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -117.01245069970298,
                "y": -411.4368642364976,
                "id": "id_39.0g4we76mu_bf.fq6c5t8ko",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -267.8188209297397,
                "y": 88.19068493329542,
                "id": "id_7f.th6wqg7d_2g.6v4lgqjea",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": -833.3344414957053,
                "y": -688.8666771859721,
                "id": "id_n5.c1fpac9yk_j4.v77ov9fs",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 888.5049126407755,
                "y": 115.7141705006261,
                "id": "id_oo.i6d7clnvj_37.ppkc76nl3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -302.21467179938975,
                "y": 955.7948596071583,
                "id": "id_8e.7q7q6sy5u_qj.sm4ywwgmu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -123.09071661810583,
                "y": -743.9429678424965,
                "id": "id_3f.39kh2zvh9_kn.xy33viyna",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 446.1251873248282,
                "y": -973.9237506688183,
                "id": "id_ce.4i8qmtdko_r1.x96ieir2j",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 224.03350900748273,
                "y": 966.1372952810816,
                "id": "id_68.17fe9jl2k_qu.4xxncmoaa",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 664.2708105368654,
                "y": 826.2516781798427,
                "id": "id_ig.9qyxpl1uf_my.926ap48km",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 535.4624001445222,
                "y": 448.7246997534985,
                "id": "id_ev.gn9qoircr_cg.q37laubhj",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 752.047118771874,
                "y": -330.68051965044094,
                "id": "id_kw.1p2dfyb5_96.ohyboydpg",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 63.010853389946305,
                "y": 339.2757345974951,
                "id": "id_1r.0e2dizir_9f.9xco8p91u",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1060.3269586583988,
                "y": 170.13094976474235,
                "id": "id_tg.brqkzs7dc_4q.4pplbislp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -431.5443967502921,
                "y": 401.7620353252896,
                "id": "id_bz.jljdhpt7w_b5.rfliq3hy",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1291.8693394920542,
                "y": -139.77427049840287,
                "id": "id_zv.vanwiqah_3v.rvgd487j8",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 45.61083840575725,
                "y": -239.56747170126573,
                "id": "id_19.lzn9yjswek_6n.kffyjrhto",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 1471.7754024995602,
                "y": -250.15240563314387,
                "id": "id_14v.rwx6g0bze_6y.5himxu4ua",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -747.95617726886,
                "y": 960.9138339700189,
                "id": "id_kr.yf7en0xt_qo.wwbu5nz27",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1490.1187766800626,
                "y": -619.78430611937,
                "id": "id_15e.49xn7n37g_h7.s8gl3unt",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -897.0315548776183,
                "y": 979.0646503107819,
                "id": "id_ox.14w82s7pk_r7.2bsbp2iz",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 642.1202942636164,
                "y": 326.3730971973805,
                "id": "id_hu.4bwg645ue_92.dfj80sva7",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 705.7835116324816,
                "y": 15.420800612619473,
                "id": "id_jl.s7fio9mwt_f.f5cvfwj0cm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -15.228958440366114,
                "y": 442.17285301075526,
                "id": "id_f.88qa9co0in_ca.680mokjba",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1438.3771861847663,
                "y": -391.47471189223995,
                "id": "id_13y.dktzy8ds_av.h385otptb",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 208.23824769942576,
                "y": 328.2429244093739,
                "id": "id_5s.8kronbpam_94.8qtvq3b3p",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -969.162397815482,
                "y": 486.7587307452102,
                "id": "id_qx.5ugtyw59h_di.rbbcaryc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1347.99304631955,
                "y": 925.405197146303,
                "id": "id_11f.zqzkhj85i_pp.el4vlyo4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -654.8699898450863,
                "y": -665.756702492724,
                "id": "id_i6.vbi8v3a7_ih.r8opm3roc",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -535.4857409580857,
                "y": 107.03822773830848,
                "id": "id_ev.hhiqa9fko_2z.1djjx5htp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 42.99360063452855,
                "y": 197.82006570414183,
                "id": "id_16.zrpfiua32_5h.tiszh74ve",
                "nodeType": "system-minor",
                "affiliation": "solfed"
            },
            {
                "x": 462.94516315312035,
                "y": -247.86056871362666,
                "id": "id_cu.y0xj5kcm6_6v.uzaozaqiu",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 217.85120251572903,
                "y": -803.0455058655033,
                "id": "id_61.un5pd4lin_mb.1mz4do7mp",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 712.1719694992216,
                "y": -716.0602638096858,
                "id": "id_js.66veq08ie_jw.263o24f9o",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 139.15771208547676,
                "y": 561.210534694987,
                "id": "id_3v.5oe7qpu8_fl.7kupfx5v",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -28.19400543654342,
                "y": -567.1852648343419,
                "id": "id_s.6zfimvcsz_fr.6o3ps2vl",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": -830.9882664235026,
                "y": 49.08981954378032,
                "id": "id_n2.zksk3hxxe_1d.38emccbtug",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 144.3328510162171,
                "y": 688.1940769514397,
                "id": "id_40.bzdhw4mcu_j4.6ziur3pvd",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 517.6690257243185,
                "y": -75.39148148581228,
                "id": "id_ed.o322b70y_23.e3cykf6qm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 809.7073822049508,
                "y": 522.0196376034698,
                "id": "id_mh.pgrmgwjcu_ei.0pg7mscrh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 738.4483776081584,
                "y": 40.88663117031115,
                "id": "id_ki.g53i7dap_14.vx2nwe2w3",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -443.3662111967848,
                "y": 801.111067930942,
                "id": "id_cb.d6ly6oemv_m9.3zxzh265",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 1145.2260717195627,
                "y": 161.99069088659007,
                "id": "id_vt.84zlodta_4h.znxo9id5m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -556.4337418353518,
                "y": 448.26698369891824,
                "id": "id_fg.fm4nq5kt8_cg.9m0e3bszi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 776.7838039167334,
                "y": 312.7745730798126,
                "id": "id_lk.s7t5lktzf_8o.rvuhc62s4",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -23.202217651779506,
                "y": -975.0311828807097,
                "id": "id_n.7a2o04f5nh_r3.14ev9jwx6",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 447.562140333622,
                "y": -86.73783310152055,
                "id": "id_cf.k8j7wckxl_2e.qk8ca6b0m",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -188.60161761722975,
                "y": -499.9452153395296,
                "id": "id_58.lnp2kq7mx_dv.y0zyt2syf",
                "nodeType": "system-minor",
                "affiliation": "bree"
            },
            {
                "x": 585.2647103171191,
                "y": -442.7944076888548,
                "id": "id_g9.9j2bomgml_ca.sljvv4ojh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -974.2165491359558,
                "y": -178.16038731214508,
                "id": "id_r2.7snbe60w_4y.5rv13fzuq",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 965.8689606866808,
                "y": 57.04597308433313,
                "id": "id_qt.va689tg1_1l.1nkx4lwoi",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": 316.84654491969377,
                "y": -895.7917571399726,
                "id": "id_8s.uh4ee3tin_ov.si47ykozm",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "x": -363.61736310225285,
                "y": 13.15279101996532,
                "id": "id_a3.m83oxzvrb_d.5i0m8pcyh",
                "nodeType": "system-minor",
                "affiliation": "unaffiliated"
            },
            {
                "id": "Sol",
                "x": -20,
                "y": 120,
                "nodeType": "system-major",
                "affiliation": "solfed"
            },
            {
                "id": "Elysium",
                "x": 525,
                "y": 131,
                "nodeType": "system-major",
                "affiliation": "solfed"
            },
            {
                "id": "Tianjing",
                "x": -300,
                "y": -253,
                "nodeType": "system-major",
                "affiliation": "solfed"
            },
            {
                "id": "Nuevo Mexico",
                "x": 120,
                "y": -471,
                "nodeType": "system-major",
                "affiliation": "solfed"
            },
            {
                "id": "Capella",
                "x": 55,
                "y": 141,
                "nodeType": "system-major",
                "affiliation": "solfed"
            },
            {
                "id": "Newer England",
                "x": -100,
                "y": -90,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "San Cristobal",
                "x": -300,
                "y": -180,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Bree Prime",
                "x": -150,
                "y": -620,
                "nodeType": "system-major",
                "affiliation": "bree"
            },
            {
                "id": "Minor 1",
                "x": -40,
                "y": 300,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 2",
                "x": -231,
                "y": -300,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 3",
                "x": -201,
                "y": 130,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 4",
                "x": -140,
                "y": -209,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 5",
                "x": 440,
                "y": 300,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 6",
                "x": 340,
                "y": 200,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 7",
                "x": 240,
                "y": 0,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 8",
                "x": 159,
                "y": -200,
                "nodeType": "system",
                "affiliation": "solfed"
            },
            {
                "id": "Minor 9",
                "x": -200,
                "y": 400,
                "nodeType": "system",
                "affiliation": "solfed"
            }
        ]
    }
}

export default DBDMap;