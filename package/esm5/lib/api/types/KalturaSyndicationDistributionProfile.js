/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaSyndicationDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaSyndicationDistributionProfileArgs.prototype.xsl;
var KalturaSyndicationDistributionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSyndicationDistributionProfile, _super);
    function KalturaSyndicationDistributionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSyndicationDistributionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSyndicationDistributionProfile' },
            xsl: { type: 's' },
            feedId: { type: 's', readOnly: true }
        });
        return result;
    };
    return KalturaSyndicationDistributionProfile;
}(KalturaDistributionProfile));
export { KalturaSyndicationDistributionProfile };
if (false) {
    /** @type {?} */
    KalturaSyndicationDistributionProfile.prototype.xsl;
    /** @type {?} */
    KalturaSyndicationDistributionProfile.prototype.feedId;
}
typesMappingStorage['KalturaSyndicationDistributionProfile'] = KalturaSyndicationDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFPMUcsSUFBQTtJQUEyRCxpRUFBMEI7SUFLakYsK0NBQVksSUFBaUQ7ZUFFekQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUMvQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dEQS9CTDtFQVMyRCwwQkFBMEIsRUF1QnBGLENBQUE7QUF2QkQsaURBdUJDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSwgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzIHtcbiAgICB4c2w/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3luZGljYXRpb25EaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgeHNsIDogc3RyaW5nO1xuXHRyZWFkb25seSBmZWVkSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVN5bmRpY2F0aW9uRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0eHNsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZlZWRJZCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGUnXSA9IEthbHR1cmFTeW5kaWNhdGlvbkRpc3RyaWJ1dGlvblByb2ZpbGU7Il19