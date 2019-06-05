/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCondition } from './KalturaCondition';
/**
 * @record
 */
export function KalturaHashConditionArgs() { }
/** @type {?|undefined} */
KalturaHashConditionArgs.prototype.hashName;
/** @type {?|undefined} */
KalturaHashConditionArgs.prototype.hashSecret;
var KalturaHashCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaHashCondition, _super);
    function KalturaHashCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaHashCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaHashCondition' },
            hashName: { type: 's' },
            hashSecret: { type: 's' }
        });
        return result;
    };
    return KalturaHashCondition;
}(KalturaCondition));
export { KalturaHashCondition };
if (false) {
    /** @type {?} */
    KalturaHashCondition.prototype.hashName;
    /** @type {?} */
    KalturaHashCondition.prototype.hashSecret;
}
typesMappingStorage['KalturaHashCondition'] = KalturaHashCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUhhc2hDb25kaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFIYXNoQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0FBUTVFLElBQUE7SUFBMEMsZ0RBQWdCO0lBS3RELDhCQUFZLElBQWdDO2VBRXhDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDekUsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0JBaENMO0VBVTBDLGdCQUFnQixFQXVCekQsQ0FBQTtBQXZCRCxnQ0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLG9CQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25kaXRpb24sIEthbHR1cmFDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhSGFzaENvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbkFyZ3Mge1xuICAgIGhhc2hOYW1lPyA6IHN0cmluZztcblx0aGFzaFNlY3JldD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFIYXNoQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYUNvbmRpdGlvbiB7XG5cbiAgICBoYXNoTmFtZSA6IHN0cmluZztcblx0aGFzaFNlY3JldCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUhhc2hDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUhhc2hDb25kaXRpb24nIH0sXG5cdFx0XHRcdGhhc2hOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGhhc2hTZWNyZXQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUhhc2hDb25kaXRpb24nXSA9IEthbHR1cmFIYXNoQ29uZGl0aW9uOyJdfQ==