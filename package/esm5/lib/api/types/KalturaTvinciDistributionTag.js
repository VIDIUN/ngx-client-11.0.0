/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaTvinciDistributionTagArgs() { }
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.tagname;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.extension;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.protocol;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.format;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.filename;
/** @type {?|undefined} */
KalturaTvinciDistributionTagArgs.prototype.ppvmodule;
var KalturaTvinciDistributionTag = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaTvinciDistributionTag, _super);
    function KalturaTvinciDistributionTag(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaTvinciDistributionTag.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaTvinciDistributionTag' },
            tagname: { type: 's' },
            extension: { type: 's' },
            protocol: { type: 's' },
            format: { type: 's' },
            filename: { type: 's' },
            ppvmodule: { type: 's' }
        });
        return result;
    };
    return KalturaTvinciDistributionTag;
}(KalturaObjectBase));
export { KalturaTvinciDistributionTag };
if (false) {
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.tagname;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.extension;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.protocol;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.format;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.filename;
    /** @type {?} */
    KalturaTvinciDistributionTag.prototype.ppvmodule;
}
typesMappingStorage['KalturaTvinciDistributionTag'] = KalturaTvinciDistributionTag;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWWxGLElBQUE7SUFBa0Qsd0RBQWlCO0lBUy9ELHNDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDakYsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0E1Q0w7RUFja0QsaUJBQWlCLEVBK0JsRSxDQUFBO0FBL0JELHdDQStCQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOEJBQThCLENBQUMsR0FBRyw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB0YWduYW1lPyA6IHN0cmluZztcblx0ZXh0ZW5zaW9uPyA6IHN0cmluZztcblx0cHJvdG9jb2w/IDogc3RyaW5nO1xuXHRmb3JtYXQ/IDogc3RyaW5nO1xuXHRmaWxlbmFtZT8gOiBzdHJpbmc7XG5cdHBwdm1vZHVsZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWcgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB0YWduYW1lIDogc3RyaW5nO1xuXHRleHRlbnNpb24gOiBzdHJpbmc7XG5cdHByb3RvY29sIDogc3RyaW5nO1xuXHRmb3JtYXQgOiBzdHJpbmc7XG5cdGZpbGVuYW1lIDogc3RyaW5nO1xuXHRwcHZtb2R1bGUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFUdmluY2lEaXN0cmlidXRpb25UYWdBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVR2aW5jaURpc3RyaWJ1dGlvblRhZycgfSxcblx0XHRcdFx0dGFnbmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHRlbnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdG9jb2wgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9ybWF0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBwdm1vZHVsZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnJ10gPSBLYWx0dXJhVHZpbmNpRGlzdHJpYnV0aW9uVGFnOyJdfQ==