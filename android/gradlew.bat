@echo off
setlocal
set CLASSPATH=%~dp0gradle\wrapper\gradle-wrapper.jar
java -classpath "%CLASSPATH%" -Xmx64m org.gradle.wrapper.GradleWrapperMain %*
