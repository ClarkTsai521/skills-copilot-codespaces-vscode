function SkillsMember() {
    var _this = this;

    this.init = function () {
        _this.initSkills();
    };

    this.initSkills = function () {
        if ($('.skills').length) {
            $('.skills').each(function () {
                var $this = $(this);
                var $skills = $this.find('.skill');
                var $progressBar = $this.find('.progress-bar');
                var $progressBarValue = $this.find('.progress-bar-value');
                var $progressBarLabel = $this.find('.progress-bar-label');
                var $progressBarValueLabel = $this.find('.progress-bar-value-label');
                var $progressBarValueLabelValue = $this.find('.progress-bar-value-label-value');

                $progressBarValueLabelValue.text($progressBarValue.val() + '%');

                $progressBar.slider({
                    min: 0,
                    max: 100,
                    value: $progressBarValue.val(),
                    range: 'min',
                    animate: true,
                    slide: function (event, ui) {
                        $progressBarValue.val(ui.value);
                        $progressBarValueLabelValue.text(ui.value + '%');
                    }
                });
            });
        }
    };
}