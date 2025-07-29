
        const chartData = [
            ["Toplam Ürün Sayfa Görüntülemeleri", 113015],
            ["Oturumlar", 25490],
            ["Sepete Ekle", 5360],
            ["Gerçek Satış Birimleri", 2923],
            ["Dönüşüm Oranı", 754],
        ];

        const total = chartData[0][1];

        const options = {
            chart: {
                width: 400,
                height: 400,
                bottomWidth: 1 / 3,
                curve: { enabled: true },
            },
            block: {
                dynamicHeight: false,
                minHeight: 15,
            },
            label: {
                fontSize: "21px",
                fontWeight: "700",
                //   fill: "#FFFFFF",
                format: (label, value) => {
                    const percent = ((value / total) * 100).toFixed(2);
                    return `${percent}%`;
                },
            },
        };

        const funnel = new D3Funnel("#funnel");
        funnel.draw(chartData, options);

        const customColors = [
            "rgba(137, 112, 189, 1)",
            "rgba(137, 112, 189, 1)",
            "rgba(204, 216, 229, 1)",
            "rgba(2, 62, 125, 1)",
            "rgba(27, 105, 199, 1)",
            "rgba(255, 194, 131, 1)",
        ];

        setTimeout(() => {
            document.querySelectorAll('#funnel svg path[d]').forEach((path, i) => {
                if (customColors[i]) path.setAttribute("fill", customColors[i]);
            });
        }, 0);