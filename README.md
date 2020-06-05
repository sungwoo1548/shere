# shere (s-here)

# expo build pj

## step1 (android)
> 이 과정은 firebase를 이용하기 위한 기본 셋팅임.

1. app.json 에 android 정보 추가

2. firebase project 생성 :arrow_right: google-services.json 다운로드 

3. expo build:android -t app-bundle :arrow_right: option 1 선택 (권장)

   빌드옵션 : https://docs.expo.io/workflow/expo-cli/#commands

   ![image](https://user-images.githubusercontent.com/21153016/83851672-ade4e100-a74d-11ea-96dc-71be1e627bff.png)

   

4. expo build시 처음에 keystore를 생성하는데, 무료계정일 경우 대기시간이 길어질 수 있음. 
   (Queued 상태라면 기다림 필요)

   ![image](https://user-images.githubusercontent.com/21153016/83852342-9a864580-a74e-11ea-90fa-d7ee5dcf81ad.png)

   

5. expo fetch:android:hashes :arrow_right: `sha1`&`sha256`값 복사 후 firebase project 에 저장

