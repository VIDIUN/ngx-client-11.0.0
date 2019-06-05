/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaProvisionJobData } from './KalturaProvisionJobData';
/**
 * @record
 */
export function KalturaAkamaiProvisionJobDataArgs() { }
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.wsdlUsername;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.wsdlPassword;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.cpcode;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.emailId;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.primaryContact;
/** @type {?|undefined} */
KalturaAkamaiProvisionJobDataArgs.prototype.secondaryContact;
export class KalturaAkamaiProvisionJobData extends KalturaProvisionJobData {
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
            objectType: { type: 'c', default: 'KalturaAkamaiProvisionJobData' },
            wsdlUsername: { type: 's' },
            wsdlPassword: { type: 's' },
            cpcode: { type: 's' },
            emailId: { type: 's' },
            primaryContact: { type: 's' },
            secondaryContact: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.wsdlUsername;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.wsdlPassword;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.cpcode;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.emailId;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.primaryContact;
    /** @type {?} */
    KalturaAkamaiProvisionJobData.prototype.secondaryContact;
}
typesMappingStorage['KalturaAkamaiProvisionJobData'] = KalturaAkamaiProvisionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFrYW1haVByb3Zpc2lvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlqRyxNQUFNLG9DQUFxQyxTQUFRLHVCQUF1Qjs7OztJQVN0RSxZQUFZLElBQXlDO1FBRWpELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHJvdmlzaW9uSm9iRGF0YSwgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhUHJvdmlzaW9uSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFrYW1haVByb3Zpc2lvbkpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFQcm92aXNpb25Kb2JEYXRhQXJncyB7XG4gICAgd3NkbFVzZXJuYW1lPyA6IHN0cmluZztcblx0d3NkbFBhc3N3b3JkPyA6IHN0cmluZztcblx0Y3Bjb2RlPyA6IHN0cmluZztcblx0ZW1haWxJZD8gOiBzdHJpbmc7XG5cdHByaW1hcnlDb250YWN0PyA6IHN0cmluZztcblx0c2Vjb25kYXJ5Q29udGFjdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhIGV4dGVuZHMgS2FsdHVyYVByb3Zpc2lvbkpvYkRhdGEge1xuXG4gICAgd3NkbFVzZXJuYW1lIDogc3RyaW5nO1xuXHR3c2RsUGFzc3dvcmQgOiBzdHJpbmc7XG5cdGNwY29kZSA6IHN0cmluZztcblx0ZW1haWxJZCA6IHN0cmluZztcblx0cHJpbWFyeUNvbnRhY3QgOiBzdHJpbmc7XG5cdHNlY29uZGFyeUNvbnRhY3QgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhJyB9LFxuXHRcdFx0XHR3c2RsVXNlcm5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0d3NkbFBhc3N3b3JkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNwY29kZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbWFpbElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByaW1hcnlDb250YWN0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNlY29uZGFyeUNvbnRhY3QgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUFrYW1haVByb3Zpc2lvbkpvYkRhdGEnXSA9IEthbHR1cmFBa2FtYWlQcm92aXNpb25Kb2JEYXRhOyJdfQ==