/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSchemaType } from './KalturaSchemaType';
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function SchemaServeActionArgs() { }
/** @type {?} */
SchemaServeActionArgs.prototype.type;
/**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
SchemaServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaServeAction, _super);
    function SchemaServeAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    SchemaServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schema' },
            action: { type: 'c', default: 'serve' },
            type: { type: 'es', subTypeConstructor: KalturaSchemaType, subType: 'KalturaSchemaType' }
        });
        return result;
    };
    return SchemaServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'schema' action 'serve'.
 *
 * Usage: Serves the requested XSD according to the type and name
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { SchemaServeAction };
if (false) {
    /** @type {?} */
    SchemaServeAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZW1hU2VydmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVtYVNlcnZlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjckY7Ozs7Ozs7O0FBQUE7SUFBdUMsNkNBQWtCO0lBSXJELDJCQUFZLElBQTRCO2VBRXBDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQ3hELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE9BQU8sRUFBRTtZQUMxQyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUNwRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRCQXhDTDtFQW1CdUMsa0JBQWtCLEVBc0J4RCxDQUFBOzs7Ozs7Ozs7QUF0QkQsNkJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhU2NoZW1hVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVtYVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYVNlcnZlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICB0eXBlIDogS2FsdHVyYVNjaGVtYVR5cGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlbWEnIGFjdGlvbiAnc2VydmUnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgdGhlIHJlcXVlc3RlZCBYU0QgYWNjb3JkaW5nIHRvIHRoZSB0eXBlIGFuZCBuYW1lXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlbWFTZXJ2ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICB0eXBlIDogS2FsdHVyYVNjaGVtYVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZW1hU2VydmVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZW1hJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2VydmUnIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZW1hVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZW1hVHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19