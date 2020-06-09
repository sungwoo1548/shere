# shere (s-here)

# Project by expo(react-native)

## Step1 (for Android)
> 이 과정은 추후 PlayStore에 배포 및 구글 서비스를 이용 하기 위한 기본 셋팅임.

1. app.json 에 android 정보 추가

2. firebase project 생성

3. expo build:android :arrow_right: option 1 선택 (but, keystore가 이미 있는 사람은 expo 문서 참조)

   빌드옵션 : https://docs.expo.io/workflow/expo-cli/#commands

   ![image](https://user-images.githubusercontent.com/21153016/83851672-ade4e100-a74d-11ea-96dc-71be1e627bff.png)

   

4. expo build시 처음에 keystore를 생성하는데, 무료계정일 경우 대기시간이 길어질 수 있음. 
   (Queued 상태라면 기다림 필요)

   ![image](https://user-images.githubusercontent.com/21153016/83852342-9a864580-a74e-11ea-90fa-d7ee5dcf81ad.png)

   

5. expo fetch:android:hashes :arrow_right: `sha1`&`sha256`값 복사 후 firebase project 에 저장

6. google-services.json 다운로드 :arrow_right: 로컬 프로젝트 폴더에 저장(.gitignore에 추가 = 노출 방지) 



## Step2 (GoogleSignin)

> `expo`에서 GoogleSignin을 하기 위한 방법은 2가지, 
>
> 1. expo-app-auth :arrow_forward: browser사용 ( ; 새창이떠서 로그인 하는 형태 )
> 2. expo-google-app-auth :arrow_forward: native 기능( ; 구글 아이디 선택하는 형태 )
>
> 여기서 **2번 과정**으로 진행 할것임.
> 해당 과정은 안드로이드 휴대폰에 .apk파일이 설치되어야 동작함. 그래서 `Step1`에서 빌드한 것을 이용하여 이후 절차를 진행.



1. `Step1`에서 빌드한 .apk 파일을 휴대폰 또는 안드로이드 시뮬레이터에 설치. ( expo 로 빌드 된것은 OTA 기능을 통해 코드 수정 후 expo publish를 통해 자동업데이트가 가능함. = **매번 apk 설치 할 필요 없음. ** )
2. 

