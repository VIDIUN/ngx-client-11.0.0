/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlRecognizer } from './KalturaUrlRecognizer';
/**
 * @record
 */
export function KalturaUrlRecognizerAkamaiG2OArgs() { }
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.headerData;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.headerSign;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.timeout;
/** @type {?|undefined} */
KalturaUrlRecognizerAkamaiG2OArgs.prototype.salt;
export class KalturaUrlRecognizerAkamaiG2O extends KalturaUrlRecognizer {
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
            objectType: { type: 'c', default: 'KalturaUrlRecognizerAkamaiG2O' },
            headerData: { type: 's' },
            headerSign: { type: 's' },
            timeout: { type: 'n' },
            salt: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.headerData;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.headerSign;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.timeout;
    /** @type {?} */
    KalturaUrlRecognizerAkamaiG2O.prototype.salt;
}
typesMappingStorage['KalturaUrlRecognizerAkamaiG2O'] = KalturaUrlRecognizerAkamaiG2O;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk8uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXhGLE1BQU0sb0NBQXFDLFNBQVEsb0JBQW9COzs7O0lBT25FLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXJsUmVjb2duaXplciwgS2FsdHVyYVVybFJlY29nbml6ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhVXJsUmVjb2duaXplcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk9BcmdzICBleHRlbmRzIEthbHR1cmFVcmxSZWNvZ25pemVyQXJncyB7XG4gICAgaGVhZGVyRGF0YT8gOiBzdHJpbmc7XG5cdGhlYWRlclNpZ24/IDogc3RyaW5nO1xuXHR0aW1lb3V0PyA6IG51bWJlcjtcblx0c2FsdD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPIGV4dGVuZHMgS2FsdHVyYVVybFJlY29nbml6ZXIge1xuXG4gICAgaGVhZGVyRGF0YSA6IHN0cmluZztcblx0aGVhZGVyU2lnbiA6IHN0cmluZztcblx0dGltZW91dCA6IG51bWJlcjtcblx0c2FsdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk8nIH0sXG5cdFx0XHRcdGhlYWRlckRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aGVhZGVyU2lnbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aW1lb3V0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNhbHQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVVybFJlY29nbml6ZXJBa2FtYWlHMk8nXSA9IEthbHR1cmFVcmxSZWNvZ25pemVyQWthbWFpRzJPOyJdfQ==