(function wrapJquery($) {
    $.fn.inlineSvg = function fnInlineSvg() {
        this.each(imgToSvg);

        return this;
    };


    const cache = {};

    function imgToSvg() {
        const $img = $(this);
        const src = $img.attr('src');

        // fill cache by src with promise
        if (!cache[src]) {
            const d = $.Deferred();
            $.get(src, (data) => {
                d.resolve($(data).find('svg'));
            });
            cache[src] = d.promise();
        }

        // replace img with svg when cached promise resolves
        cache[src].then((svg) => {
            const $svg = $(svg).clone();

            if ($img.attr('id')) $svg.attr('id', $img.attr('id'));
            if ($img.attr('class')) $svg.attr('class', $img.attr('class'));
            if ($img.attr('style')) $svg.attr('style', $img.attr('style'));

            if ($img.attr('width')) {
                $svg.attr('width', $img.attr('width'));
                if (!$img.attr('height')) $svg.removeAttr('height');
            }
            if ($img.attr('height')) {
                $svg.attr('height', $img.attr('height'));
                if (!$img.attr('width')) $svg.removeAttr('width');
            }

            $svg.insertAfter($img);
            $img.trigger('svgInlined', $svg[0]);
            $img.remove();
        });
    }
}(jQuery));
