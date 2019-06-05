/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSessionRestriction } from './KalturaSessionRestriction';
/**
 * @record
 */
export function KalturaPreviewRestrictionArgs() { }
/** @type {?|undefined} */
KalturaPreviewRestrictionArgs.prototype.previewLength;
var KalturaPreviewRestriction = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPreviewRestriction, _super);
    function KalturaPreviewRestriction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPreviewRestriction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPreviewRestriction' },
            previewLength: { type: 'n' }
        });
        return result;
    };
    return KalturaPreviewRestriction;
}(KalturaSessionRestriction));
export { KalturaPreviewRestriction };
if (false) {
    /** @type {?} */
    KalturaPreviewRestriction.prototype.previewLength;
}
typesMappingStorage['KalturaPreviewRestriction'] = KalturaPreviewRestriction;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7QUFPdkcsSUFBQTtJQUErQyxxREFBeUI7SUFJcEUsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBN0JMO0VBUytDLHlCQUF5QixFQXFCdkUsQ0FBQTtBQXJCRCxxQ0FxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblJlc3RyaWN0aW9uLCBLYWx0dXJhU2Vzc2lvblJlc3RyaWN0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25SZXN0cmljdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlc3Npb25SZXN0cmljdGlvbkFyZ3Mge1xuICAgIHByZXZpZXdMZW5ndGg/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUHJldmlld1Jlc3RyaWN0aW9uIGV4dGVuZHMgS2FsdHVyYVNlc3Npb25SZXN0cmljdGlvbiB7XG5cbiAgICBwcmV2aWV3TGVuZ3RoIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHJldmlld1Jlc3RyaWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQcmV2aWV3UmVzdHJpY3Rpb24nIH0sXG5cdFx0XHRcdHByZXZpZXdMZW5ndGggOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbiddID0gS2FsdHVyYVByZXZpZXdSZXN0cmljdGlvbjsiXX0=