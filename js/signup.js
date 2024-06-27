const userName = document.querySelector('#username'); //이름
const userCall = document.querySelector('#usercall'); //전화번호
const userep = document.querySelector('#userep'); //문의사항
const check = document.querySelector('#check'); //개인동의
const btnPass = document.querySelector('#btnPass'); //보내기 버튼

const formCheck = document.querySelector('.form_check'); //문의 확인 창
const nameCheck = document.querySelector('.nameCheck'); //이름 확인
const callCheck = document.querySelector('.callCheck'); //전화 확인
const eqCheck = document.querySelector('.eqCheck'); //문의 내용 확인
const Ycheck = document.querySelector('.Ycheck');//예
const Ncheck = document.querySelector('.Ncheck');//아니오
const closeCheck = document.querySelector('.check_close'); //닫기창

btnPass.addEventListener('click',function(){
    if(userName.value == ''){
        alert('이름을 입력해주세요.')
    }
    else if(userCall.value == ''){
        alert('전화번호를 입력해주세요.')
    }
    else if(userep.value == ''){
        alert('문의 내용을 적어주세요.')
    }
    else if(check.checked == false){
        alert('개인정보 수집 및 이용에 동의해주세요.')
    }else{
        formCheck.classList.add('on')
        nameCheck.innerText = `${userName.value}`
        callCheck.innerText= `${userCall.value}`
        eqCheck.innerText = `${userep.value}`

        Ycheck.addEventListener('click', function(){
            alert('문의 내용이 접수되었습니다.')
            formCheck.classList.remove('on');
            userName.value = '';
            userCall.value = '';
            userep.value = '';
            check.checked = false;
        })

        Ncheck.addEventListener('click', function(){
            userName.value = '';
            userCall.value = '';
            userep.value = '';
            check.checked = false;
            formCheck.classList.remove('on');
        })

        closeCheck.addEventListener('click', function(){
            formCheck.classList.remove('on')
        })
    } return false
})