/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDVRStatus } from './KalturaDVRStatus';
import { KalturaAkamaiUniversalStreamType } from './KalturaAkamaiUniversalStreamType';
import { KalturaProvisionJobData } from './KalturaProvisionJobData';
/**
 * @record
 */
export function KalturaAkamaiUniversalProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.streamId;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.systemUserName;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.systemPassword;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.domainName;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.dvrEnabled;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.dvrWindow;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.primaryContact;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.secondaryContact;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.streamType;
/** @type {?|undefined} */
KalturaAkamaiUniversalProvisionJobDataArgs.prototype.notificationEmail;
export class KalturaAkamaiUniversalProvisionJobData extends KalturaProvisionJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAkamaiUniversalProvisionJobData' },
            streamId: { type: 'n' },
            systemUserName: { type: 's' },
            systemPassword: { type: 's' },
            domainName: { type: 's' },
            dvrEnabled: { type: 'en', subTypeConstructor: KalturaDVRStatus, subType: 'KalturaDVRStatus' },
            dvrWindow: { type: 'n' },
            primaryContact: { type: 's' },
            secondaryContact: { type: 's' },
            streamType: { type: 'es', subTypeConstructor: KalturaAkamaiUniversalStreamType, subType: 'KalturaAkamaiUniversalStreamType' },
            notificationEmail: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.streamId;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.systemUserName;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.systemPassword;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.domainName;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.dvrEnabled;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.dvrWindow;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.primaryContact;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.secondaryContact;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.streamType;
    /** @type {?} */
    KalturaAkamaiUniversalProvisionJobData.prototype.notificationEmail;
}
typesMappingStorage['KalturaAkamaiUniversalProvisionJobData'] = KalturaAkamaiUniversalProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqRyxNQUFNLDZDQUE4QyxTQUFRLHVCQUF1Qjs7OztJQWEvRSxZQUFZLElBQWtEO1FBRTFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx3Q0FBd0MsRUFBRTtZQUMzRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2pHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDakksaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyx3Q0FBd0MsQ0FBQyxHQUFHLHNDQUFzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEVlJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFEVlJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUFrYW1haVVuaXZlcnNhbFN0cmVhbVR5cGUgfSBmcm9tICcuL0thbHR1cmFBa2FtYWlVbml2ZXJzYWxTdHJlYW1UeXBlJztcbmltcG9ydCB7IEthbHR1cmFQcm92aXNpb25Kb2JEYXRhLCBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFQcm92aXNpb25Kb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWthbWFpVW5pdmVyc2FsUHJvdmlzaW9uSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGFBcmdzIHtcbiAgICBzdHJlYW1JZD8gOiBudW1iZXI7XG5cdHN5c3RlbVVzZXJOYW1lPyA6IHN0cmluZztcblx0c3lzdGVtUGFzc3dvcmQ/IDogc3RyaW5nO1xuXHRkb21haW5OYW1lPyA6IHN0cmluZztcblx0ZHZyRW5hYmxlZD8gOiBLYWx0dXJhRFZSU3RhdHVzO1xuXHRkdnJXaW5kb3c/IDogbnVtYmVyO1xuXHRwcmltYXJ5Q29udGFjdD8gOiBzdHJpbmc7XG5cdHNlY29uZGFyeUNvbnRhY3Q/IDogc3RyaW5nO1xuXHRzdHJlYW1UeXBlPyA6IEthbHR1cmFBa2FtYWlVbml2ZXJzYWxTdHJlYW1UeXBlO1xuXHRub3RpZmljYXRpb25FbWFpbD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhIGV4dGVuZHMgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEge1xuXG4gICAgc3RyZWFtSWQgOiBudW1iZXI7XG5cdHN5c3RlbVVzZXJOYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1QYXNzd29yZCA6IHN0cmluZztcblx0ZG9tYWluTmFtZSA6IHN0cmluZztcblx0ZHZyRW5hYmxlZCA6IEthbHR1cmFEVlJTdGF0dXM7XG5cdGR2cldpbmRvdyA6IG51bWJlcjtcblx0cHJpbWFyeUNvbnRhY3QgOiBzdHJpbmc7XG5cdHNlY29uZGFyeUNvbnRhY3QgOiBzdHJpbmc7XG5cdHN0cmVhbVR5cGUgOiBLYWx0dXJhQWthbWFpVW5pdmVyc2FsU3RyZWFtVHlwZTtcblx0bm90aWZpY2F0aW9uRW1haWwgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhJyB9LFxuXHRcdFx0XHRzdHJlYW1JZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzeXN0ZW1Vc2VyTmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1QYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkb21haW5OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGR2ckVuYWJsZWQgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRFZSU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFEVlJTdGF0dXMnIH0sXG5cdFx0XHRcdGR2cldpbmRvdyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcmltYXJ5Q29udGFjdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWNvbmRhcnlDb250YWN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0cmVhbVR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWthbWFpVW5pdmVyc2FsU3RyZWFtVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQWthbWFpVW5pdmVyc2FsU3RyZWFtVHlwZScgfSxcblx0XHRcdFx0bm90aWZpY2F0aW9uRW1haWwgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFrYW1haVVuaXZlcnNhbFByb3Zpc2lvbkpvYkRhdGEnXSA9IEthbHR1cmFBa2FtYWlVbml2ZXJzYWxQcm92aXNpb25Kb2JEYXRhOyJdfQ==