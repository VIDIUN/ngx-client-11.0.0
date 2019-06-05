/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlResource } from './KalturaUrlResource';
/**
 * @record
 */
export function KalturaSshUrlResourceArgs() { }
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.privateKey;
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.publicKey;
/** @type {?|undefined} */
KalturaSshUrlResourceArgs.prototype.keyPassphrase;
var KalturaSshUrlResource = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSshUrlResource, _super);
    function KalturaSshUrlResource(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSshUrlResource.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSshUrlResource' },
            privateKey: { type: 's' },
            publicKey: { type: 's' },
            keyPassphrase: { type: 's' }
        });
        return result;
    };
    return KalturaSshUrlResource;
}(KalturaUrlResource));
export { KalturaSshUrlResource };
if (false) {
    /** @type {?} */
    KalturaSshUrlResource.prototype.privateKey;
    /** @type {?} */
    KalturaSshUrlResource.prototype.publicKey;
    /** @type {?} */
    KalturaSshUrlResource.prototype.keyPassphrase;
}
typesMappingStorage['KalturaSshUrlResource'] = KalturaSshUrlResource;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNzaFVybFJlc291cmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU3NoVXJsUmVzb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7OztBQVNsRixJQUFBO0lBQTJDLGlEQUFrQjtJQU16RCwrQkFBWSxJQUFpQztlQUV6QyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDRDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQzFFLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0NBbkNMO0VBVzJDLGtCQUFrQixFQXlCNUQsQ0FBQTtBQXpCRCxpQ0F5QkM7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHVCQUF1QixDQUFDLEdBQUcscUJBQXFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVVybFJlc291cmNlLCBLYWx0dXJhVXJsUmVzb3VyY2VBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsUmVzb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTc2hVcmxSZXNvdXJjZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVVybFJlc291cmNlQXJncyB7XG4gICAgcHJpdmF0ZUtleT8gOiBzdHJpbmc7XG5cdHB1YmxpY0tleT8gOiBzdHJpbmc7XG5cdGtleVBhc3NwaHJhc2U/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU3NoVXJsUmVzb3VyY2UgZXh0ZW5kcyBLYWx0dXJhVXJsUmVzb3VyY2Uge1xuXG4gICAgcHJpdmF0ZUtleSA6IHN0cmluZztcblx0cHVibGljS2V5IDogc3RyaW5nO1xuXHRrZXlQYXNzcGhyYXNlIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU3NoVXJsUmVzb3VyY2VBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNzaFVybFJlc291cmNlJyB9LFxuXHRcdFx0XHRwcml2YXRlS2V5IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHB1YmxpY0tleSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRrZXlQYXNzcGhyYXNlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTc2hVcmxSZXNvdXJjZSddID0gS2FsdHVyYVNzaFVybFJlc291cmNlOyJdfQ==