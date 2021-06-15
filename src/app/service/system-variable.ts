import { Injectable } from "@angular/core";

@Injectable()
export class SystemVariableProvider {
  public SYSTEM_PARAMS = {
    REGION: "us-east-1",
    COGNITO_POOL: {
      UserPoolId: "us-east-1:c66e2192-38a6-47d9-a5fc-9d0f31057932",
      ClientId: "us-east-1:f9bab343-131f-4a8d-929e-3600eee15e72"
    },
    COGNITO_IDENTITY: {
      IDENTITY_POOL_ID: "us-east-1:c66e2192-38a6-47d9-a5fc-9d0f31057932"
    },
    S3: {
      BUCKET_NAME: ""
    }
  };
}