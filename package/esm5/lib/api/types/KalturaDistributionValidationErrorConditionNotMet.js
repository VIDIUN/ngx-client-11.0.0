/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
/**
 * @record
 */
export function KalturaDistributionValidationErrorConditionNotMetArgs() { }
/** @type {?|undefined} */
KalturaDistributionValidationErrorConditionNotMetArgs.prototype.conditionName;
var KalturaDistributionValidationErrorConditionNotMet = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDistributionValidationErrorConditionNotMet, _super);
    function KalturaDistributionValidationErrorConditionNotMet(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDistributionValidationErrorConditionNotMet.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionValidationErrorConditionNotMet' },
            conditionName: { type: 's' }
        });
        return result;
    };
    return KalturaDistributionValidationErrorConditionNotMet;
}(KalturaDistributionValidationError));
export { KalturaDistributionValidationErrorConditionNotMet };
if (false) {
    /** @type {?} */
    KalturaDistributionValidationErrorConditionNotMet.prototype.conditionName;
}
typesMappingStorage['KalturaDistributionValidationErrorConditionNotMet'] = KalturaDistributionValidationErrorConditionNotMet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckNvbmRpdGlvbk5vdE1ldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckNvbmRpdGlvbk5vdE1ldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFPbEksSUFBQTtJQUF1RSw2RUFBa0M7SUFJckcsMkRBQVksSUFBNkQ7ZUFFckUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx3RUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtREFBbUQsRUFBRTtZQUN0RyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NERBN0JMO0VBU3VFLGtDQUFrQyxFQXFCeEcsQ0FBQTtBQXJCRCw2REFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbURBQW1ELENBQUMsR0FBRyxpREFBaUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yLCBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckNvbmRpdGlvbk5vdE1ldEFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckFyZ3Mge1xuICAgIGNvbmRpdGlvbk5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQ29uZGl0aW9uTm90TWV0IGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciB7XG5cbiAgICBjb25kaXRpb25OYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yQ29uZGl0aW9uTm90TWV0QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JDb25kaXRpb25Ob3RNZXQnIH0sXG5cdFx0XHRcdGNvbmRpdGlvbk5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckNvbmRpdGlvbk5vdE1ldCddID0gS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvckNvbmRpdGlvbk5vdE1ldDsiXX0=