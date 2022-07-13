$(function(){
    var _window = $(window),
        _header = $('.top-header'),
        heroBottom;

    _window.on('scroll', function(){
        heroBottom = $('.stars').height();
        if (_window.scrollTop() > heroBottom) {
            _header.addClass('transform');
        }
        else {
            _header.removeClass('transform');
        }
    });

    _window.trigger('scroll');
    //�C�ӂ̃^�u��URL���烊���N���邽�߂̐ݒ�
    function GethashID (hashIDName){
        if(hashIDName){
        //�^�u�ݒ�
        $('.tab li').find('a').each(function() { //�^�u����a�^�O�S�Ă��擾
            var idName = $(this).attr('href'); //�^�u����a�^�O�̃����N���i��j#lunch�̒l���擾 
            if(idName == hashIDName){ //�����N���̎w�肳�ꂽURL�̃n�b�V���^�O�i��jhttp://example.com/#lunch������#�̒l�ƃ^�u���̃����N���i��j#lunch�����������`�F�b�N
            var parentElm = $(this).parent(); //�^�u����a�^�O�̐e�v�f�ili�j���擾
            $('.tab li').removeClass("active"); //�^�u����li�ɂ��Ă���active�N���X����菜��
            $(parentElm).addClass("active"); //�����N���̎w�肳�ꂽURL�̃n�b�V���^�O�ƃ^�u���̃����N���������ł���΁Ali��active�N���X��ǉ�
            //�\��������G���A�ݒ�
            $(".timeTable").removeClass("is-active"); //���Ƃ��Ƃ��Ă���is-active�N���X����菜��
            $(hashIDName).addClass("is-active"); //�\�����������G���A�̃^�u�����N�����N���b�N������A�\���G���A��is-active�N���X��ǉ� 
            }
        });
        }
    }
    
    //�^�u���N���b�N������
    $('.tab a').on('click', function() {
        var idName = $(this).attr('href'); //�^�u���̃����N�����擾  
        GethashID (idName);//�ݒ肵���^�u�̓ǂݍ��݂�
        return false;//a�^�O�𖳌��ɂ���
    });
    
    
    // ��L�̓������y�[�W���ǂݍ��܂ꂽ�炷���ɓ�����
    $(window).on('load', function () {
        $('.tab li:first-of-type').addClass("active"); //�ŏ���li��active�N���X��ǉ�
        $('.timeTable:first-of-type').addClass("is-active"); //�ŏ���.area��is-active�N���X��ǉ�
        var hashName = location.hash; //�����N���̎w�肳�ꂽURL�̃n�b�V���^�O���擾
        GethashID (hashName);//�ݒ肵���^�u�̓ǂݍ���
    });

        //�^�u���N���b�N������
        $('.tab a').on('click', function() {
            var idName = $(this).attr('href'); //�^�u���̃����N�����擾  
            GethashID (idName);//�ݒ肵���^�u�̓ǂݍ��݂�
            return false;//a�^�O�𖳌��ɂ���
        });
})