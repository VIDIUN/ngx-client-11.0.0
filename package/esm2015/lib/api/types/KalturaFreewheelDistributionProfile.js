/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaFreewheelDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.apikey;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.email;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.sftpPass;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.sftpLogin;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.accountId;
/** @type {?|undefined} */
KalturaFreewheelDistributionProfileArgs.prototype.metadataProfileId;
export class KalturaFreewheelDistributionProfile extends KalturaDistributionProfile {
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
            objectType: { type: 'c', default: 'KalturaFreewheelDistributionProfile' },
            apikey: { type: 's' },
            email: { type: 's' },
            sftpPass: { type: 's' },
            sftpLogin: { type: 's' },
            accountId: { type: 's' },
            metadataProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.apikey;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.email;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.sftpPass;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.sftpLogin;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.accountId;
    /** @type {?} */
    KalturaFreewheelDistributionProfile.prototype.metadataProfileId;
}
typesMappingStorage['KalturaFreewheelDistributionProfile'] = KalturaFreewheelDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVkxRyxNQUFNLDBDQUEyQyxTQUFRLDBCQUEwQjs7OztJQVMvRSxZQUFZLElBQStDO1FBRXZELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUN4RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUNBQXFDLENBQUMsR0FBRyxtQ0FBbUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGVBcmdzICBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncyB7XG4gICAgYXBpa2V5PyA6IHN0cmluZztcblx0ZW1haWw/IDogc3RyaW5nO1xuXHRzZnRwUGFzcz8gOiBzdHJpbmc7XG5cdHNmdHBMb2dpbj8gOiBzdHJpbmc7XG5cdGFjY291bnRJZD8gOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSB7XG5cbiAgICBhcGlrZXkgOiBzdHJpbmc7XG5cdGVtYWlsIDogc3RyaW5nO1xuXHRzZnRwUGFzcyA6IHN0cmluZztcblx0c2Z0cExvZ2luIDogc3RyaW5nO1xuXHRhY2NvdW50SWQgOiBzdHJpbmc7XG5cdG1ldGFkYXRhUHJvZmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRnJlZXdoZWVsRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0YXBpa2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVtYWlsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBQYXNzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBMb2dpbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhY2NvdW50SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZyZWV3aGVlbERpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFGcmVld2hlZWxEaXN0cmlidXRpb25Qcm9maWxlOyJdfQ==